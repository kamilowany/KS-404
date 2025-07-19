import { writeFileSync } from 'fs';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateLogs() {
  const logs = [];
  for (let i = 0; i < 20; i++) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'Jesteś generatorem krótkich, enigmatycznych logów systemowych z świata sci-fi, gdzie KS-404 to błąd systemu projektowego.' },
          { role: 'user', content: 'Wygeneruj krótki (1-2 zdania), nieoczywisty log systemowy.' },
        ],
        max_tokens: 50,
        temperature: 0.8,
      });
      logs.push(response.choices[0].message.content.trim());
    } catch (error) {
      console.error('Błąd API:', error);
      break;
    }
  }
  writeFileSync('logs.json', JSON.stringify(logs, null, 2));
  console.log('Wygenerowano 20 logów i zapisano do logs.json');
}

generateLogs();
