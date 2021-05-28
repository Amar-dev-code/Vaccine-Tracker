import { useFormik } from "formik";
import { useDispatch, connect } from "react-redux";
import {
  Button,
  TextField,
  CircularProgress,
  Typography,
  Box,
} from "@material-ui/core";

import { Results } from "../Results/Components/Results";
import "../Styles/Form.css";
import { requestPayload } from "../Interfaces/payload";

import { getVaccineInfo } from "../VaccineTracker/store/vaccineTracker.actions";

const mapStateToProps = (state: any) => {
  return {
    result: state.vaccineTracker.vaccineResults,
    isLoading: state.vaccineTracker.isLoading,
    isResponseReceived: state.vaccineTracker.isResponseReceived,
  };
};

type Props = ReturnType<typeof mapStateToProps>;

function Component(props: Props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      pincode: "",
    },
    onSubmit: (value: requestPayload) => {
      dispatch(getVaccineInfo(value));
    },
  });
  function trackVaccineForm() {
    return (
      <div className="bigScreen-container">
        <div className="flex-container">
          <Typography variant="h5">India Covid Vaccine Tracker</Typography>
          <Box marginTop="5px">
            <Typography variant="h6">Search by Pincode</Typography>
          </Box>
          <Box marginTop="5px">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <TextField
                  id="pincode"
                  label="Pincode"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.pincode}
                />
              </div>
              <div className="button-container">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </form>
          </Box>
          {props.isLoading ? <CircularProgress /> : null}
          {props.isResponseReceived ? <Results /> : null}
        </div>
      </div>
    );
  }
  return <>{trackVaccineForm()}</>;
}

export const TrackerForm = connect(mapStateToProps)(Component);
