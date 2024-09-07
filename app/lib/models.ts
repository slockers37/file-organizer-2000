import { createOpenAI } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

const zuki = createOpenAI({
  baseURL: 'https://api.zukijourney.com/v1',
  apiKey: process.env.ZUKI_API_KEY,
});

const models = {
  "zuki-gpt-4o": zuki("gpt-4o"),
  "groq-llama-3.1-70b": groq("llama-3.1-70b-versatile"),
  "gemini-pro-latest": google('gemini-1.5-pro-latest'),
  "gemini-pro-exp": google('gemini-1.5-pro-exp-0827'),
};

export const getModel = (name: string) => {
  if (!models[name]) {
    console.log(`Model ${name} not found`);
    console.log(`Defaulting to groq-llama-3.1-70b`);
    return models["groq-llama-3.1-70b"];
  }
  console.log(`Using model ${name}`);
  return models[name];
};
