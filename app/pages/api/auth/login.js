// pages/api/auth/login.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Replace with your actual API logic here
      // Example: Make a request to your authentication server
      const response = await fetch('https://your-auth-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(response.status).json({ success: false, error: data.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  