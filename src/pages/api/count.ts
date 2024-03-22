import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

AWS.config.update({
  region: "eu-west-2",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const count = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const DynamoDB = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: process.env.DYNAMO_DB_PETITION_RESPONSES_TABLE as string,
      Select: "COUNT",
    };
    const count = await DynamoDB.scan(params).promise();

    res.status(200).json({ response: count.Count?.toString() || "" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ response: "That didn't work" });
  }
};

type Data = {
  response: string;
};

export default count;
