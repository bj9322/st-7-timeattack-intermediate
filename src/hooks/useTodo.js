import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/slices/todoSlice";

export default function useTodo(isDone) {
  const todos = useSelector((state) => {
    state.todo.todoList
  })
  const dispatch = useDispatch();

  const filterTodos = todos.filter((todo) => {
    todo.isDone === isDone;
  })

  const toggleTodoFunc = (id) => {
    dispatch(toggleTodo(id))
  }

  const deleteTodoFunc = (id) => {
    dispatch(deleteTodo(id));
  }

  return {filterTodos, toggleTodoFunc, deleteTodoFunc};
}
