import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../api/todos";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { addTodos } from "./todoSlice";

const TodoList = () => {
  // get the data from store
  const todos = useSelector((state) => {
    return state.todoList;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos()
      .then((response) => {
        dispatch(addTodos(response.data));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <>
      <TodoGenerator />
      <TodoGroup todos={todos} done={false} />
    </>
  );
};

export default TodoList;
