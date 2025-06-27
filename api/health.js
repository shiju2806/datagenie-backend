export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'DataGenie Backend is running on Vercel + Supabase! 🚀',
    version: '1.0.0'
  })
}
