import { NextApiRequest, NextApiResponse } from "next";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const count = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const client = new DynamoDBClient({
      region: "eu-west-2",
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID as string,
        secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
      },
    });
    const docClient = DynamoDBDocumentClient.from(client);

    const command = new ScanCommand({
      TableName: process.env.DYNAMO_DB_PETITION_RESPONSES_TABLE as string,
      Select: "COUNT",
    });

    const send = await docClient.send(command);

    res.status(200).json({ response: send.Count?.toString() || "" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ response: "That didn't work" });
  }
};

type Data = {
  response: string;
};

export default count;
