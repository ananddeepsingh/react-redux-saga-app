import React, { useState } from 'react';
import { Button, Input } from 'antd'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/action';


const TodoItem = (todo) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();
  return (
    <div className="ant-row" style={{ marginBottom: 8 }}>
      <div className="ant-col ant-col-6">#{Math.trunc(todo.id * 10)}</div>
      <div className="ant-col ant-col-6">
        {edit ?
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          : name}
      </div>
      <div className="ant-col ant-col-6">
        <Button type="primary" onClick={() => {
          if (edit) {
            setName(name);
            dispatch(updateTodo({
              id: todo.id,
              name
            }))
          }
          setEdit(!edit)
        }} >{edit ? "Update" : "Edit"}</Button>
      </div>
      <div className="ant-col ant-col-6">
        <Button type="primary" onClick={() => dispatch(deleteTodo({ id: todo.id }))} danger>Delete</Button>
      </div>
    </div>
  );
};

export default TodoItem;
