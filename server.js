import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PASSKEY = process.env.PASSKEY || '9b8c86b9-4ea4-4121-9805-407987a88a2a';
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_TO = process.env.EMAIL_TO || 'pannerselva232@gmail.com';

app.post('/api/contact', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const passkeyHeader = req.headers['x-passkey'];
  const token = authHeader?.toString().replace(/^Bearer\s+/i, '') || passkeyHeader;

  if (!token || token !== PASSKEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const missing = [];
  if (!SMTP_HOST || SMTP_HOST === 'smtp.gmail.com' && SMTP_USER === 'your-email@gmail.com') missing.push('SMTP_HOST');
  if (!SMTP_USER || SMTP_USER === 'your-email@gmail.com') missing.push('SMTP_USER');
  if (!SMTP_PASS || SMTP_PASS === 'your-email-app-password') missing.push('SMTP_PASS');

  if (missing.length > 0) {
    console.log('\\n--- Mock Email Delivered ---');
    console.log(`From: ${name} <${email}>`);
    console.log(`Message: \\n${message}`);
    console.log('----------------------------\\n');
    console.log('Note: SMTP credentials are not properly configured in .env.');
    console.log('This is a simulated success so the frontend UI can work for demonstration purposes.');
    return res.json({ success: true, mocked: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: EMAIL_TO,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error('Mail send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`Contact API server running on http://localhost:${port}`);
});
