export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message } = req.body

    // Basic response - will enhance with Supabase + Claude later
    res.status(200).json({
      content: `Hello! I received: "${message}". DataGenie backend is working! 🚀`,
      insights: ["Backend deployed successfully", "Ready for full integration"],
      visualizations: [],
      confidence: "High"
    })

  } catch (error) {
    res.status(500).json({ 
      error: 'Internal server error'
    })
  }
}
