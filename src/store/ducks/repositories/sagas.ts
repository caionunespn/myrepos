import { call, put } from "redux-saga/effects";
import provider from "../../../providers/config";
import { loadSuccess, loadFailure } from "./actions";

export function* load() {
  try {
    const response = yield call(provider.get, "users/caionunespn/repos");
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
