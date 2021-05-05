import React from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoList = () => {
  let todos = useSelector((state) => state.app);
  console.log(todos)
  return (
    <div style={{ width: "500px", margin: "0 auto" }} >
      <TodoInput />
      {todos.map(todo => <TodoItem todo={todo} id={todo.id} name={todo.name} key={todo.id} />)}
    </div>
  );
};

export default TodoList;
