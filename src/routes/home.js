import { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/todo";
import { add } from "../store"

const Home = ({todo, addTodo}) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addTodo(text);
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

const mapStateToProps = (state) => {
  return {todo: state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: text => dispatch(add(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
