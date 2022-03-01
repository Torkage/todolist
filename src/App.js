import { Provider } from "jotai";
import TodoList from "./TodoList/TodoList";

function App() {
  const initTodo1 = [
    { id: 1, text: "todo1-1" },
    { id: 2, text: "todo1-2" },
    { id: 3, text: "todo1-3" },
  ];
  const initTodo2 = [
    { id: 1, text: "todo2-1" },
    { id: 2, text: "todo2-2" },
    { id: 3, text: "todo2-3" },
  ];

  return (
    <>
      <Provider>
        <TodoList initTodos={initTodo1} />
      </Provider>
      <Provider>
        <TodoList initTodos={initTodo2} />
      </Provider>
    </>
  );
}

export default App;
