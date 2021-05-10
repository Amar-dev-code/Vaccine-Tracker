import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

import "../../Styles/Form.css";

const mapStateToProps = (state: any) => {
  return { results: state.vaccineTracker.vaccineResults };
};
type Props = ReturnType<typeof mapStateToProps>;

function Component(props: Props) {
  const data = props.results;
  let display;
  if (data.length > 0) {
    display = data.map((element: any) => {
      return (
        <div className="box">
          <Typography variant="h5" color="textPrimary">
            Vaacination Center:{element.address}
          </Typography>
          {element.sessions.map((data: any) => {
            return (
              <>
                <Typography variant="h6" color="textPrimary">
                  Date:{data.date}
                </Typography>

                <Typography variant="h6" color="textPrimary">
                  Minimum Age Limit:{data.min_age_limit}
                </Typography>

                <Typography variant="h6" color="textPrimary">
                  Slots Available:{data.available_capacity}
                </Typography>

                <Typography variant="h6" color="textPrimary">
                  Vaccine Type:{data.vaccine}
                </Typography>
              </>
            );
          })}
        </div>
      );
    });
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
        <Typography variant="h3" color="inherit">
          Vaccine Availability
        </Typography>
        <div>{display}</div>:
      </div>
    </>
  );
}

export const Results = connect(mapStateToProps)(Component);
