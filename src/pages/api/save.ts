import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import mailchimp from "@mailchimp/mailchimp_marketing";

AWS.config.update({
  region: "eu-west-2",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us14",
});

async function callPing() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

const save = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { name, email, postcode, optIn } = req.body;
    const DynamoDB = new AWS.DynamoDB.DocumentClient();
    const now = new Date();
    const time = now.toISOString();

    if (optIn) {
      await mailchimp.lists.addListMember("bcbcde27c6", {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
        },
      });
    }

    await DynamoDB.put(
      {
        TableName: process.env.DYNAMO_DB_PETITION_RESPONSES_TABLE as string,
        Item: {
          email,
          name,
          postcode,
          optIn,
          time,
        },
        ConditionExpression: "attribute_not_exists(email)",
      },
      (error) => {
        if (error) {
          if (error.statusCode === 400) {
            return res.status(400).json({ response: "That didn't work" });
          }
        } else {
          return res.status(200).json({
            response: "Name added",
          });
        }
      }
    );
  } catch (e) {
    console.log(e);
    res.status(500).json({ response: "That didn't work" });
  }
};

type Data = {
  response: string;
};

export default save;
