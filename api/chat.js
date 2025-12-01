export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const userMessage = req.body.message;

  try {
    const n8nResponse = await fetch("https://julevanie.app.n8n.cloud/webhook/081cff8e-9896-474b-8424-57178bb8b0a9", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await n8nResponse.json();

    res.status(200).json({ reply: data.reply || "⚠️ Nessuna risposta dal workflow n8n" });

  } catch (err) {
    res.status(500).json({ error: "Errore proxy", details: err.message });
  }
}
