import { all, call, put, takeLatest } from 'redux-saga/effects';
import { addTodoSaga, updateTodoSaga, deleteTodoSaga } from './action';

//////////////////////////// add functionality
export function* onAddTodoSaga({ payload }) {
  yield put(addTodoSaga(payload))
}

export function* onAddTodo() {
  yield takeLatest("ADD_TODO", onAddTodoSaga)
}
////////////////////////////////////////////////


// delete functionality
export function* onDeleteTodoSaga({ payload: { id } }) {
  yield put(deleteTodoSaga(id))
}


export function* onDelete() {
  yield takeLatest("DELETE_TODO", onDeleteTodoSaga)
}

// update Functionality
export function* onUpdateTodoSaga(payload) {
  yield put(updateTodoSaga(payload))
}


export function* onUpdateTodo() {
  yield takeLatest("UPDATE_TODO", onUpdateTodoSaga)
}

export function* todos() {
  yield all([
    call(onDelete),
    call(onAddTodo),
    call(onUpdateTodo),
  ])
}
