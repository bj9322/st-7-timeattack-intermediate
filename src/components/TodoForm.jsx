import { addTodo } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const dispatch = useDispatch();
  
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (title && content){
      const reduxTodo = {
      id: Date.now(), 
      title, 
      content, 
      isDone: false
      };
      dispatch(addTodo(reduxTodo));
    }
    e.target.reset();

  };
  return (
    <form onSubmit={onSubmit}>
      <label>제목:</label>
      <input name="title" type="text" />
      <label>내용:</label>
      <input name="content" type="text" />
      <button type="submit">추가</button>
    </form>
  );
}
