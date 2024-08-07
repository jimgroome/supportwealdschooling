import { createClient } from "@typeform/api-client";
import { NextApiRequest, NextApiResponse } from "next";

const agreeFieldId = "7a641515-995f-432c-be0d-1a52128ea521";
const yearFieldId = "54b5375c-9141-4f54-bc89-a4845223bfc8";

const survey = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const tf = createClient({
      token: process.env.TYPEFORM_API_KEY,
    });

    const tfRequest = await tf.responses.list({
      uid: "E3thXaWp",
      pageSize: 1000,
      completed: true,
    });

    const yes = tfRequest.items.filter((response) =>
      response.answers?.filter(
        (answer) =>
          answer.field?.ref === agreeFieldId && answer.boolean === true
      )
    );

    let years = [
      { year: "Reception", count: 0 },
      { year: "1", count: 0 },
      { year: "2", count: 0 },
      { year: "3", count: 0 },
      { year: "4", count: 0 },
      { year: "5", count: 0 },
      { year: "6", count: 0 },
      { year: "Total", count: 0 },
    ];

    yes.map((response) => {
      const agreeResponse = response.answers?.find(
        (answer) => answer.field?.ref === yearFieldId
      );
      const responseYear = agreeResponse?.choice?.label;
      years.map((year) => {
        if (year.year === responseYear) {
          year.count++;
        }
        if (year.year === "Total") {
          year.count++;
        }
      });
    });

    res.status(200).json({ response: JSON.stringify(years) });
  } catch (e) {
    console.log(e);
    res.status(500).json({ response: "That didn't work" });
  }
};

type Data = {
  response: string;
};

export default survey;
