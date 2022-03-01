import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import useTodoList from "../../useTodoList";

const TodoActions = () => {
  const todo = useContext(TodoContext);
  const { deleteTodo } = useTodoList();

  const onDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <div>
      <button onClick={onDeleteTodo}>supprimer</button>
    </div>
  );
};

export default TodoActions;
