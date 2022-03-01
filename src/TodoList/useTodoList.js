import { useAtom } from "jotai";
import { todosAtom } from "./atoms/todoListAtoms";

const useTodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id != todoId)]);
  };

  //ajouter updateTodo pour modifier le texte d'une todo

  return {
    todos,
    setTodos,
    addTodo,
    deleteTodo,
  };
};

export default useTodoList;
