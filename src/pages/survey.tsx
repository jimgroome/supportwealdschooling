import SiteHeader from "@/components/header";
import useFormStore from "@/stores/formStore";
import {
  CircularProgress,
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
      <SiteHeader hideHeader />
      {survey.years.length === 0 ? (
        <CircularProgress />
      ) : (
        <>
          <Table sx={{ mb: 4 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Year</strong>
                </TableCell>
                <TableCell>
                  <strong>Yes count</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {survey.years.map((year) => (
                <TableRow key={year.year}>
                  <TableCell>{year.year}</TableCell>
                  <TableCell>{year.count}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <strong>Grand total</strong>
                </TableCell>
                <TableCell>
                  <strong>{survey.grandTotal}</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="body1">
            Total responses: {survey.totalResponses}
          </Typography>
        </>
      )}
    </>
  );
};

export default Survey;
