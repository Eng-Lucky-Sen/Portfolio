
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Strong CORS (important for Vercel → Render)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Contact Route
app.post('/api/contact', async (req, res) => {
  console.log("📥 Incoming request:", req.body); // DEBUG

  const { name, email, subject, message } = req.body;

  // ✅ Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    // ✅ Email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>📬 New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    console.log("📩 Sending Email...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent");

    // ✅ Telegram message
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

    // ✅ Success response
    res.status(200).json({
      message: "✅ Message sent successfully!"
    });

  } catch (err) {
    console.error("❌ ERROR:", err.response?.data || err.message || err);

    res.status(500).json({
      message: "❌ Failed to send message"
    });
  }
});

// ✅ Server start
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});