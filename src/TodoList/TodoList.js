import { useEffect } from "react";
import styled from "styled-components";
import AddTodoForm from "./AddTodoForm/AddTodoForm";
import { TodoContext } from "./context/TodoContext";
import TodoItem from "./TodoItem/TodoItem";
import useTodoList from "./useTodoList";

const TodoList = ({ initTodos }) => {
  const { todos, setTodos } = useTodoList();

  useEffect(() => {
    setTodos(initTodos);
  }, [initTodos]);

  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoContext.Provider value={todo} key={`todo${todo.id}${todo.text}`}>
          <TodoItem />
        </TodoContext.Provider>
      ))}
      <AddTodoForm />
    </StyledTodoList>
  );
};

const StyledTodoList = styled.ul`
  margin-bottom: 10px;
  padding: 0px;
  list-style: none;
`;

export default TodoList;
