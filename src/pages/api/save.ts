import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";

const save = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const client = new MongoClient(process.env.MONGODB_URL as string, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    const { name, email } = req.body;

    await client.connect();
    await client
      .db("supportWealdSchooling")
      .collection("petitionResponses")
      .insertOne({ email, name });
    res.status(200).json({
      name: "Pinged your deployment. You successfully connected to MongoDB!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ name: "That didn't work" });
  } finally {
    await client.close();
  }
};

type Data = {
  name: string;
};

export default save;
