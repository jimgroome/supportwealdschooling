import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import { ContactsApi } from "@getbrevo/brevo";

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
