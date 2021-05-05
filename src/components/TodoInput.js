import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

const TodoInput = () => {
  const [name, setName] = useState("");
  let dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: Math.random(),
      name
    }))

    setName("");
  }

  return (
    <>
      <div className="row m-2">
        <Input
          type="text"
          onChange={(e) => { setName(e.target.value) }}
          value={name}
          className="col-8"
          style={{ width: "300px", margin: "10px" }}
        />
        <Button
          type="primary"
          size="medium"
          onClick={handleAddTodo}
        >Add Todo</Button>
      </div>
    </>
  );
};

export default TodoInput;
