import React from "react";
import "./TodoList.css"

const TodoList = ({ todos, changeStatus }) => {
  let style = {
    color: "red",
    listStyleType: "none",
  };
  console.log(todos);
  console.log(changeStatus);

  return (
    <ul style={style}>
      {todos.map((item) => (
        <li key={item.id} className={item.status ? "completed" : ""}>
          <input type="checkbox" onChange={() => changeStatus(item.id)} />
          {item.task}
        </li>
      ))}
      {/* //круглые скобки чтобы не прописывать return */}
    </ul>
  );
};

export default TodoList;
