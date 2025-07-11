export default async function handler(req, res) {
  try {
    const response = await fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', {
      headers: { 'X-Mashape-Key': process.env.MASHAPE_KEY }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
}
