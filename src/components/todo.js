import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

const Todo = ({ text, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li>
        <Link to={`/${id}`}>{text}</Link>
        <button onClick={() => dispatch(remove(id))}>DEL</button>
      </li>
    </>
  );
};

export default Todo;
