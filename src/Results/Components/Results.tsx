import { connect } from "react-redux";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import "../../Styles/Form.css";
import "../../Styles/Results.css";

const mapStateToProps = (state: any) => {
  return { results: state.vaccineTracker.vaccineResults };
};

type Props = ReturnType<typeof mapStateToProps>;

function Component(props: Props) {
  const data = props.results;
  let display;
  if (data.length > 0) {
    display = (
      <>
        <div className="wrapper">
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableCell>Vaccination Center</TableCell>
                <TableCell>Minimum Age Limit</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell>Available Slots</TableCell>
                <TableCell>Vaccine Type</TableCell>
                <TableCell>Dose1 Slots</TableCell>
                <TableCell>Dose2 Slots</TableCell>
              </TableHead>
              <TableBody>
                {data.map((element: any) =>
                  element.sessions.map((data: any) => {
                    return (
                      <TableRow>
                        <TableCell className="sticky-col">
                          {element.name}
                        </TableCell>
                        <TableCell align="center">
                          {data.min_age_limit}
                        </TableCell>
                        <TableCell>{data.date}</TableCell>
                        <TableCell align="center">
                          {data.available_capacity}
                        </TableCell>
                        <TableCell>{data.vaccine}</TableCell>
                        <TableCell align="center">
                          {data.available_capacity_dose1}
                        </TableCell>
                        <TableCell align="center">
                          {data.available_capacity_dose2}
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Box marginTop="5px" className="flex-container">
          <a href="https://www.cowin.gov.in/home" target="blank">
            <Typography variant="overline">
              * Please click to book your Covid Vaccine.
            </Typography>
          </a>
        </Box>
      </>
    );
  } else {
    display = (
      <div className="box">
        <Typography variant="h6" color="textPrimary">
          No Slots Available
        </Typography>
      </div>
    );
  }
  return (
    <>
      <div className="flex-container">
        <Typography variant="h4">Vaccine Availability</Typography>
        <div>{display}</div>
      </div>
    </>
  );
}

export const Results = connect(mapStateToProps)(Component);
