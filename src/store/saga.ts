import { call, put, takeEvery } from "redux-saga/effects";

import { getVaccineResults } from "../Api/getVaccineInfo";
import {
  onApiFailure,
  onApiSuccess,
} from "../VaccineTracker/store/vaccineTracker.actions";
import { GETVACCINEINFO } from "../VaccineTracker/store/vaccineTracker.types";

function* fetchUser(action: any): any {
  try {
    const response = yield call(getVaccineResults, action.request);
    yield put(onApiSuccess(response.data.centers));
  } catch (e) {
    yield put(onApiFailure());
  }
}

export function* mySaga() {
  yield takeEvery(GETVACCINEINFO, fetchUser);
}
