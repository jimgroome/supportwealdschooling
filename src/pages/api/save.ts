import { NextApiRequest, NextApiResponse } from "next";
import { ContactsApi } from "@getbrevo/brevo";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const save = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { name, email, postcode, optIn } = req.body;

    const now = new Date();
    const time = now.toISOString();

    const client = new DynamoDBClient({
      region: "eu-west-2",
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID as string,
        secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
      },
    });
    const docClient = DynamoDBDocumentClient.from(client);

    const command = new PutCommand({
      TableName: process.env.DYNAMO_DB_PETITION_RESPONSES_TABLE as string,
      Item: {
        email,
        name,
        postcode,
        optIn,
        time,
      },
      ConditionExpression: "attribute_not_exists(email)",
    });

    await docClient.send(command);

    if (optIn) {
      const brevo = new ContactsApi();
      brevo.setApiKey(0, process.env.BREVO_API_KEY as string);

      await brevo.createContact({
        email,
        attributes: {
          FIRSTNAME: name,
          POSTCODE: postcode,
        },
        listIds: [3],
        updateEnabled: true,
      });
    }

    return res.status(200).json({
      response: "Name added",
    });
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ response: e.message || "Internal Server Error" });
  }
};

type Data = {
  response: string;
};

export default save;
