import { takeLatest, call, put } from "redux-saga/effects";
import
{
    API_CALL_FAILURE,
    API_CALL_SUCCESS,
    CALL_API_REQUEST
} from "../utils/constants";

function *fetchTodoList()
{
    return yield fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response=>response.json());
}

function* TodoWorker()
{
    try
    {
        const response = yield call(fetchTodoList);
        yield put({ type: API_CALL_SUCCESS, todoList: response });
    } catch (ex)
    {
        yield put({ type: API_CALL_FAILURE, err: ex });
    }
}

export function* todoWatcher()
{
    yield takeLatest(CALL_API_REQUEST, TodoWorker);
}