import {
  GETVACCINEINFO,
  ONAPIFAILURE,
  ONAPISUCCESS,
} from "./vaccineTracker.types";
import { requestPayload } from "../../Interfaces/payload";

export const getVaccineInfo = (data: requestPayload) => {
  return {
    type: GETVACCINEINFO,
    request: data,
  };
};

export const onApiSuccess = (payload: any) => {
  return {
    type: ONAPISUCCESS,
    response: payload,
  };
};

export const onApiFailure = () => {
  return {
    type: ONAPIFAILURE,
  };
};
