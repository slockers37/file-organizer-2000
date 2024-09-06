import { anthropic } from "@ai-sdk/anthropic";
import { createOpenAI } from '@ai-sdk/openai';

const hecker = createOpenAI({
  baseURL: 'https://api.heckerai.uk.to/v2',
  apiKey: process.env.HECKER_API_KEY,
});

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

const hentai = createOpenAI({
  baseURL: 'https://proxy.hentaigpt.xyz/v1',
  apiKey: process.env.HENTAI_API_KEY,
});

const shadow = createOpenAI({
  baseURL: 'https://shadowjourney.xyz/v1',
  apiKey: process.env.SHADOW_API_KEY,
});

const zuki = createOpenAI({
  baseURL: 'https://api.zukijourney.com/v1',
  apiKey: process.env.ZUKI_API_KEY,
});


const models = {
  "hecker-gpt-4o": hecker("gpt-4o"),
  "hecker-gpt-4o-2024-05-13": hecker("gpt-4o-2024-05-13", ),
  "zuki-gpt-4o": zuki("gpt-4o"),
  "zuki-gpt-4o-2024-05-13": zuki("gpt-4o-2024-05-13", ),
  "hentai-gpt-4o": hentai("gpt-4o"),
  "hentai-gpt-4o-2024-05-13": hentai("gpt-4o-2024-05-13", ),
  "hentai-gpt-4o-2024-08-06": hentai("gpt-4o-2024-08-06", ),
  "shadow-gpt-4o": shadow("gpt-4o"),
  "shadow-gpt-4o-2024-05-13": shadow("gpt-4o-2024-05-13", ),
  "groq-llama-3.1-70b": groq("llama-3.1-70b-versatile"),
};

export const getModel = (name: string) => {
  if (!models[name]) {
    console.log(`Model ${name} not found`);
    console.log(`Defaulting to hentai-gpt-4o`);
    return models["hentai-gpt-4o"];
  }
  console.log(`Using model ${name}`);
  return models[name];
};
