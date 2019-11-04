import { all, takeLatest } from "redux-saga/effects";
import { todoWatcher } from "./todoSaga";
export function* sagaRoot()
{
    yield all([
        takeLatest(todoWatcher),
    ]);
}

