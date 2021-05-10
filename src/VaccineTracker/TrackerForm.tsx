import { useFormik } from "formik";
import { useDispatch, connect } from "react-redux";
import { Button, TextField, Divider } from "@material-ui/core";

import { Results } from "../Results/Components/Results";
import { getVaccineInfo } from "../VaccineTracker/store/vaccineTracker.actions";
import "../Styles/Loader.css";
import "../Styles/Form.css";
import { Payload } from "../Interfaces/payload";

const mapStateToProps = (state: any) => {
  return {
    result: state.vaccineTracker.vaccineResults,
    isLoading: state.vaccineTracker.isLoading,
    hasResponseReceived: state.vaccineTracker.hasResponseReceived,
  };
};
type Props = ReturnType<typeof mapStateToProps>;

function Component(props: Props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      pincode: "",
      date: "",
    },
    onSubmit: (values: Payload) => {
      dispatch(getVaccineInfo(values));
    },
  });

  if (props.isLoading) {
    return <div className="Loader"></div>;
  } else if (props.hasResponseReceived) {
    return <Results />;
  } else {
    return (
      <form onSubmit={formik.handleSubmit}>
        <div className="flex-container">
          <div className="box">
            <div>
              <TextField
                id="pincode"
                label="Pincode"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.pincode}
              />
            </div>
            <div className="space">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export const TrackerForm = connect(mapStateToProps)(Component);
