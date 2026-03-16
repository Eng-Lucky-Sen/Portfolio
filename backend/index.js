const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
// const mongoose = require('mongoose'); // ❌ Commented MongoDB
const axios = require('axios');
require('dotenv').config();

// const Contact = require('./models/Contact'); // ❌ Commented MongoDB model

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

/*
// ❌ MongoDB Connection (Commented)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
*/

// POST: Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `Contact Form: ${subject}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    // await Contact.create({ name, email, subject, message }); // ❌ Commented DB Save

    // Send Email
    await transporter.sendMail(mailOptions);
    console.log('📧 Email sent');

    // Send Telegram Notification
    const text = `📬 *New Contact Message*\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Subject: ${subject}\n💬 Message: ${message}`;
    const telegramURL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    await axios.post(telegramURL, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: text,
      parse_mode: 'Markdown'
    });
    console.log('📲 Telegram message sent');

    res.status(200).json({ message: 'Message sent & notified successfully (DB disabled).' });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ message: '❌ Failed to send or notify.' });
  }
});

app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
