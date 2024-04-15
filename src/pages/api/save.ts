import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

AWS.config.update({
  region: "eu-west-2",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const save = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { name, email, postcode, optIn } = req.body;
    const DynamoDB = new AWS.DynamoDB.DocumentClient();
    const now = new Date();
    const time = now.toISOString();

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
