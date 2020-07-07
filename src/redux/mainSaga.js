import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth8153Saga from '../features/EmailAuth8153/redux/sagas';
import CalendarView8152Saga from '../features/CalendarView8152/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth8153Saga,
CalendarView8152Saga,
    
  ]);
}