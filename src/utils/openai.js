import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
  //   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export default openai;
