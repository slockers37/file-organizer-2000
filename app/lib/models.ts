import { createOpenAI } from '@ai-sdk/openai';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

const zuki = createOpenAI({
  baseURL: 'https://api.zukijourney.com/v1',
  apiKey: process.env.ZUKI_API_KEY,
});

const glhf = createOpenAI({
  baseURL: 'https://api.zukijourney.com/v1',
  apiKey: process.env.ZUKI_API_KEY,
});



const models = {
  "zuki-gpt-4o": zuki("gpt-4o"),
  "groq-llama-3.1-70b": groq("llama-3.1-70b-versatile"),
  "glhf-llama-3.1-405b": groq("hf:meta-llama/Meta-Llama-3.1-405B-Instruct"),
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
