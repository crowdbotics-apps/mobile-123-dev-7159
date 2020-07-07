import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth8162Saga from '../features/EmailAuth8162/redux/sagas';
import CalendarView8161Saga from '../features/CalendarView8161/redux/sagas';
import CalendarView8158Saga from '../features/CalendarView8158/redux/sagas';
import EmailAuth8156Saga from '../features/EmailAuth8156/redux/sagas';
import CalendarView8155Saga from '../features/CalendarView8155/redux/sagas';
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
EmailAuth8162Saga,
CalendarView8161Saga,
EmailAuth8156Saga,
CalendarView8155Saga,
EmailAuth8153Saga,
CalendarView8152Saga,
    
  ]);
}