// Action handlers for redux - generator functions

import { call, put, select } from "redux-saga/effects";
import { setFinalForm, setFormPage1, setFormPage2 } from "./rootSlice";
import { requestGetUser } from "./request";

export function* handleGetUser(action) {
  const dataFromStore = yield select((data) => data);
  const formNumber = Number(dataFromStore.FormStage) - 1;

  try {
    const response = yield call(requestGetUser, action, dataFromStore);
    let { data } = response;

    switch (formNumber) {
      case 1:
        yield put(setFormPage1(data));
        console.log(data);
        break;
      case 2:
        yield put(setFormPage2(data));
        console.log(data);
        break;
      case 3:
        yield put(setFinalForm(data));
        console.log(data);
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
}
