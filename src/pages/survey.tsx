import SiteHeader from "@/components/header";
import useFormStore from "@/stores/formStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

const Survey = () => {
  const { getSurvey, survey } = useFormStore();
  useEffect(() => {
    getSurvey();
  }, []);
  return (
    <>
      <SiteHeader />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Yes count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {survey.map((response) => (
            <TableRow key={response.year}>
              <TableCell>{response.year}</TableCell>
              <TableCell>{response.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Typography variant="body1">Total signatures: {count}</Typography> */}
    </>
  );
};

export default Survey;
