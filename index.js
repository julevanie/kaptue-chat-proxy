export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  // --- Basic Auth ---
  const authHeader = "Basic " + Buffer.from("kaptueg@yahoo.fr:Dacambiare").toString("base64");

  try {
    const response = await fetch(
      "https://julevanie.app.n8n.cloud/webhook/3e12c2cb-e8b1-442e-b55b-b4bfb6efc6f4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authHeader
        },
        body: JSON.stringify({ message })
      }
    );

    const resultText = await response.text();

    // provo a convertire in JSON
    try {
      const result = JSON.parse(resultText);

      return res.status(200).json({
        reply: result.reply || "⚠️ Nessuna risposta dal workflow n8n"
      });

    } catch (e) {
      return res.status(500).json({
        error: "La risposta del webhook NON è JSON",
        raw: resultText
      });
    }

  } catch (error) {
    return res.status(500).json({ error: "Proxy error", details: error });
  }
}
