import { NextApiRequest, NextApiResponse } from "next";
import Anthropic from "@anthropic-ai/sdk";

const draftEmail = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const client = new Anthropic({
    apiKey: process.env["ANTHROPIC_API_KEY"],
  });

  const prompt = `You are a concerned parent of a 5 to 11 year old child being educated at primary school in the Weald of Kent, UK. Rewrite this email to the education department of Kent County Council to express your support for a campaign to open a new non-selective secondary school in Cranbrook, Kent:
  
"I am taking the time to write to you directly to let you know how strongly I feel about the need for a non-selective secondary school in Cranbrook. I wholeheartedly support the community voice expressed through the Support Weald Schooling campaign.

Our two local MPs, Katie Lam and Mike Martin, are pushing hard in Parliament. Both they and the SWS Team are receiving the message from the DfE that a new school must be requested by KCC. Numbers need to justify it being built.

The old Angley School was hugely successful, it then spiralled downwards through mismanagement which was, shamefully, not addressed by the DfE. The community lost a school because what was left was not fit for purpose. For DfE/KCC to state it is now not needed was only because the old school had been allowed to be run down!

At a time when there is continued house-building across our parishes, more school places are going to be needed. We are very aware of the independent schools haemorrhaging pupils (classes merging; schools closing) who are then needing places in mainstream education.

You also need to look at the homeschooling situation across The Weald. It is outrageous that so many parents are choosing this for their children as they believe it to be the best option. Surely that must tell you that things are not right? The current system is not working.

Our children are travelling great distances, on occasions the school bus/train journey does exceed the DfE permitted time to be taken. But more important is the unchecked experiences of

the children when travelling to school(s). There are safety and safeguarding concerns which are simply not being addressed. This has been raised on numerous occasions – there is a duty of care which is not occurring.

Add to this the fact that a lot of our children attend small primary schools. To suddenly have to attend a senior school, for many over 10 miles away, which has 330 pupils in Year 7 when their formative experience has been a year group of 22 average is bound to cause anxiety, stress and depression in many.

These factors combined account for the high homeschooling figure and the appalling ‘pupil absenteeism’ percentage recorded by the schools to which our children are forced to travel. They are left isolated. Any friendships made with children at school cannot realistically be developed in person due to the distances involved.

As another issue, the amount of pupils being ferried long distances to schools which are not working for many incurs a great travel cost. This should not be the case.

Our communities are suffering. A school should be the centre and heartbeat of a community. It brings people together. We are experiencing isolation, both individually, familywise and as communities. This is having very negative effects and needs your attention.

I strongly urge you to listen to the arguments and see what is actually happening under the current system. Primary/Nursery surveys show there is a huge demand for a local school. It is what people desperately want and need. I can only hope that you take the time to appreciate this and to act upon it.

Thank you."

Please use paragraphs and line breaks to make the email more readable. Do not include anything like "here is the email" or "here is the draft email".`;

  try {
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
  } catch (error) {
    console.error(error);
  }
};

type Data = {
  response: string[];
};

export default draftEmail;
