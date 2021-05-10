import {
  GETVACCINEINFO,
  ONAPISUCCESS,
  ONAPIFAILURE,
} from "./vaccineTracker.types";

interface vaccineReducer {
  isLoading: boolean;
  hasResponseReceived: boolean;
  hasErrorOccurred: boolean;
  vaccineResults: any;
}

const INITIAL_STATE: vaccineReducer = {
  isLoading: false,
  hasResponseReceived: false,
  hasErrorOccurred: false,
  vaccineResults: {},
};

export const vaccineReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GETVACCINEINFO:
      return {
        ...state,
        isLoading: true,
      };

    case ONAPISUCCESS:
      return {
        ...state,
        vaccineResults: action.response,
        hasResponseReceived: true,
        isLoading: false,
      };

    default:
      return {
        ...state,
        hasErrorOccurred: true,
        isLoading: false,
      };
  }
};
