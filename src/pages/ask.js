// pages/api/ask.js
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { question } = JSON.parse(req.body);

  const prompt = `
You are a portfolio assistant chatbot for Lucky Sen.
Lucky is a full-stack developer with experience in React, Tailwind CSS, MongoDB, Node.js, and building offline-first and AI-powered applications.

Here is a brief about Lucky:
- Worked on Remote Work Wellbeing Tracker (MongoDB, React)
- Built an Offline Educational Platform with PWA and IndexedDB
- Created AI Accessibility Enhancer (Voice commands, keyboard nav, adaptive layout)
- Proficient in Tailwind CSS, React, Express, and deploying on Vercel

Answer user questions based on this context.

Q: ${question}
A:
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  const answer = completion.choices[0].message.content.trim();
  res.status(200).json({ answer });
}
