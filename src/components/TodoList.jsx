import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos, isDone }) {

  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);
  const toggleTodoItem = (id) => {
    // TODO: 리덕스 reducer 로 상태변경 해보세요.
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const deleteTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h2>{isDone ? "Done" : "Wokring..."}</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoItem={toggleTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </ul>
    </>
  );
}
