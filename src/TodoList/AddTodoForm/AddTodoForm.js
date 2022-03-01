import { useState } from "react";
import useTodoList from "../useTodoList";

const AddTodoForm = () => {
  const { addTodo } = useTodoList();
  const [newTodo, setNewTodo] = useState({
    text: "",
  });
  const resetNewTodo = () => {
    setNewTodo({ text: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const todoId = Date.now();
    addTodo({ ...newTodo, id: todoId });
    resetNewTodo();
  };

  const onChangeTodo = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <div>Nouvelle todo</div>
        <input type="text" name="text" onChange={onChangeTodo} value={newTodo.text} />
      </label>
    </form>
  );
};

export default AddTodoForm;
