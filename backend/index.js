

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
// POST: Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // ✅ Create transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // ✅ Email options (FIXED)
    const mailOptions = {
      from: process.env.EMAIL_FROM,   // MUST be your Gmail
      to: process.env.EMAIL_TO,
      replyTo: email,                // User email
      subject: `Contact Form: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // ✅ Send Email
    console.log("📩 Sending Email...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent");

    // ✅ Telegram Notification
const text = `
<b>📬 New Contact Message</b>
👤 Name: ${name}
📧 Email: ${email}
📝 Subject: ${subject}
💬 Message: ${message}
`;

    const telegramURL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    console.log("📲 Sending Telegram...");
    await axios.post(telegramURL, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: text,
      parse_mode: 'HTML'
    });
    console.log("✅ Telegram sent");

    res.status(200).json({
      message: "✅ Message sent successfully!"
    });

  } catch (err) {
    console.error("❌ FULL ERROR:", err.response?.data || err.message || err);
    res.status(500).json({
      message: "❌ Failed to send message"
    });
  }
});

// Server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});