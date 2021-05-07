import * as actions from './action';

describe('test actions', () => {
  it("should create an action to ADD_TODO a todo", () => {
    const payload = {
      id: 0.11,
      name: 'Apple'
    };
    const expectedTodoAction = {
      type: "ADD_TODO",
      payload
    }
    expect(actions.addTodo(payload)).toEqual(expectedTodoAction)
  })

  it("should create an action to ADD_TODO_SAGA a todo", () => {
    const payload = {
      id: 0.11,
      name: 'Apple'
    };
    const expectedTodoAction = {
      type: "ADD_TODO",
      payload
    }
    expect(actions.addTodo(payload)).toEqual(expectedTodoAction)
  })

  it("should create an action to DELETE_TODO_SAGA a todo", () => {
    const payload = 0.11;
    const expectedTodoAction = {
      type: "DELETE_TODO",
      payload
    }
    expect(actions.deleteTodo(payload)).toEqual(expectedTodoAction)
  })

  it("should create an action to DELETE_TODO a todo", () => {
    const payload = 0.11;
    const expectedTodoAction = {
      type: "DELETE_TODO",
      payload
    }
    expect(actions.deleteTodo(payload)).toEqual(expectedTodoAction)
  })

  it("should create an action to UPDATE_TODO a todo", () => {
    const payload = {
      id: 0.11,
      name: 'Apple 2'
    };
    const expectedTodoAction = {
      type: "UPDATE_TODO",
      payload
    }
    expect(actions.updateTodo(payload)).toEqual(expectedTodoAction)
  })

  it("should create an action to UPDATE_TODO_SAGA a todo", () => {
    const payload = {
      id: 0.11,
      name: 'Apple 2'
    };
    const expectedTodoAction = {
      type: "UPDATE_TODO",
      payload
    }
    expect(actions.updateTodo(payload)).toEqual(expectedTodoAction)
  })
})
