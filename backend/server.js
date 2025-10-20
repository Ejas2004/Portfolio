import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend
let resend;

try {
  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠️  Resend API key not configured. Contact form will not work.');
    console.warn('Set RESEND_API_KEY in environment variables.');
  } else {
    resend = new Resend(process.env.RESEND_API_KEY);
    console.log('✅ Resend email service configured successfully');
  }
} catch (error) {
  console.error('❌ Error configuring Resend:', error.message);
}

// Contact form endpoint (POST only)
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if Resend is configured
  if (!resend) {
    console.error('❌ Resend not configured. Check environment variables.');
    return res.status(503).json({ 
      error: 'Email service not configured. Please contact directly at the email provided on the website.' 
    });
  }

  try {
    console.log(`📧 Attempting to send email from: ${name} (${email})`);
    
    // Send email to yourself using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend verified sender
      to: ['ejas.connect@gmail.com'], // Your Resend verified email
      replyTo: email, // Visitor's email for easy reply
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email: ' + error.message });
    }

    console.log('✅ Email sent successfully via Resend:', data);

    // Auto-reply disabled on Resend free tier
    // To enable auto-replies, verify a domain at resend.com/domains

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    console.error('Full error:', error);
    
    res.status(500).json({ error: 'Failed to send email: ' + error.message });
  }
});

// GET request to /api/contact returns helpful message
app.get('/api/contact', (req, res) => {
  res.status(405).json({ 
    error: 'Method Not Allowed',
    message: 'This endpoint only accepts POST requests. Please use the contact form on the website.',
    hint: 'To test, send a POST request with JSON: { "name": "Test", "email": "test@example.com", "message": "Test message" }'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
