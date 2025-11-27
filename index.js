// index.js - semplice proxy per n8n chat (Node 18+)
import express from 'express';
import fetch from 'node-fetch'; // se il tuo host non lo fornisce, usa native fetch in Node 18+

const app = express();
app.use(express.json());

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL; // es: https://tuo.n8n.cloud/webhook/xxxxx/chat
const N8N_BASIC_USER = process.env.N8N_BASIC_USER;
const N8N_BASIC_PASS = process.env.N8N_BASIC_PASS;
const PORT = process.env.PORT || 3000;

if (!N8N_WEBHOOK_URL) {
  console.error('Devi impostare N8N_WEBHOOK_URL env var');
  process.exit(1);
}

// semplice rate limiting in memoria (modesto)
const rateMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minuto
const MAX_REQ_PER_WINDOW = 30;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip) || {count:0, since: now};
  if (now - entry.since > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0;
    entry.since = now;
  }
  entry.count += 1;
  rateMap.set(ip, entry);
  return entry.count > MAX_REQ_PER_WINDOW;
}

app.post('/chat-proxy', async (req, res) => {
  const ip = req.ip;
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  // Basic validation & sanitization minima
  const body = req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Bad request' });
  }

  // OPTIONAL: qui potresti aggiungere controllo su payload (es. controllare metadata)
  // Inoltra a n8n
  const authHeader = N8N_BASIC_USER && N8N_BASIC_PASS
    ? 'Basic ' + Buffer.from(`${N8N_BASIC_USER}:${N8N_BASIC_PASS}`).toString('base64')
    : undefined;

  try {
    const r = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(authHeader ? { Authorization: authHeader } : {})
      },
      body: JSON.stringify(body),
      // timeout etc. possono essere gestiti qui
    });

    const text = await r.text();
    res.status(r.status).send(text);
  } catch (err) {
    console.error('Proxy error', err);
    res.status(500).json({ error: 'Proxy error' });
  }
});

app.listen(PORT, () => console.log('Chat proxy listening on', PORT));
