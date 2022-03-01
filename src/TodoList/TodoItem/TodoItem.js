import styled from "styled-components";
import TodoActions from "./TodoActions/TodoActions";
import TodoInfos from "./TodoInfos/TodoInfos";

const TodoItem = () => {
  return (
    <StyledTodoItem>
      <TodoInfos />
      <TodoActions />
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.li`
  margin: 5px 0px;
  border: 1px solid black;
  padding: 5px;
`;

export default TodoItem;
