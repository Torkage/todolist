import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";

const TodoInfos = () => {
  const todo = useContext(TodoContext);

  return <StyledTodoInfos>{todo.text}</StyledTodoInfos>;
};

const StyledTodoInfos = styled.div`
  color: blue;
`;

export default TodoInfos;
