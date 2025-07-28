import { NextApiRequest, NextApiResponse } from "next";
import Anthropic from "@anthropic-ai/sdk";

const draftEmail = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const client = new Anthropic({
    apiKey: process.env["ANTHROPIC_API_KEY"],
  });

  const prompt = `You are a concerned parent of a 5 to 11 year old child being educated at primary school in the Weald of Kent, UK. Rewrite this email to the education department of Kent County Council to express your support for a campaign to open a new non-selective secondary school in Cranbrook, Kent:
  
"Dear sir or madam,
 
I am writing to you to express my support for a campaign to open a new non-selective secondary school in Cranbrook, Kent.

My main concern is the travel time between where we live and our nearest non-selective secondary school. It is unacceptable that my child will be expected to travel upwards of an hour each way every day."

Please use paragraphs and line breaks to make the email more readable. Do not include anything like "here is the email" or "here is the draft email".`;

  const message = await client.messages.create({
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
    model: "claude-3-5-haiku-latest",
  });

  const content = message.content
    // @ts-ignore
    .map((block) => block.text)
    .join("")
    .split("\n\n");

  res.status(200).json({ response: content });
};

type Data = {
  response: string[];
};

export default draftEmail;
