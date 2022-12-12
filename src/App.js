import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  function handleTask(newObj) {
    let newTodos = [...todos]; //копирует знчения предыдущего состояния
    newTodos.push(newObj); // в скопированный  массив пушим новый таск
    setTodos(newTodos); // меняем состояние
  }
  // ! Функция на изменение статуса
  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        {
          /* сравнивает по id*/
        }
        item.status = !item.status; //переворачивает значение статуса у этого объекта
      }
      return item; //возвращает измененный объект в новый массив
    });
    setTodos(newTodos); //меняем старое состояние на новое
    // ставим фигурные фотки, потому что это уже js
  }
// ! CRUD ФУНКЦИЯ НА УДАЛЕНИЕ
function deleteTodo(id){
  let newTodos = todos.filter((item)=>{
    return item.id == id
  })
  console.log(newTodos)
}

  console.log(todos);
  return (
    <div>
      {/* отображаем компоненты AddTodo и передаем туда данные из App */}
      <AddTodo handleTask={handleTask} todos={todos} setTodos={setTodos} />
      <TodoList changeStatus={changeStatus} todos={todos}  deleteTodo={deleteTodo}/>
    </div>
  );
};
// создаем AddTodo.jsx и отображаем таск
export default App;
