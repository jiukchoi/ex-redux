import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/todo";
import { add } from "../store"

const Home = () => {
  const todo = useSelector((state) => state)
  const dispatch = useDispatch()

  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(add(text))
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={text} type='text' placeholder="입력" />
        <button>Add</button>
      </form>
      <ul>
        {todo.map((todo, i) => (
          <Todo key={i} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default Home;
