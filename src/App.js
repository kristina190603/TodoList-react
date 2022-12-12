import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalEdit from "./components/ModalEdit";

const App = () => {
  // ! переменная для хранения и отображения всех тасков
  const [todos, setTodos] = useState([]);
  // ! состояние для изменения, (хранится тот таск, который будем менять)
  const [editTodo, setEditTodo] = useState({});

  function handleTask(newObj) {
    let newTodos = [...todos]; //? копирует знчения предыдущего состояния
    newTodos.push(newObj); //? в скопированный  массив пушим новый таск
    setTodos(newTodos); //? меняем состояние
  }

  // ! Функция на изменение статуса
  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        {
          /* сравнивает по id*/
        }
        item.status = !item.status; //? переворачивает значение статуса у этого объекта
      }
      return item; //? возвращает измененный объект в новый массив
    });
    setTodos(newTodos); //? меняем старое состояние на новое перерисовываем компонент
  }

  // !================= CRUD ======================
  // ! delete start
  // ? удаление по id
  function deleteTodo(id) {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  }
  //! delete end

  // ! edite start ФУНКЦИЯ ДЛЯ ТОГО ЧТОБЫ ПОУЛЧИТЬ 1 ТАСК
  function handleEdit(index) {
    setEditTodo(todos[index]);
  }
  //! edite end

  // ! ФУНКЦИЯ НА ИЗМЕНЕНИЯ
  const handleEditSave = (newTask) => {
    //? принимает новый объект
    let newTodos = todos.map((item) => {
      // ? перебирает массив состояния todos, и возвращает новый массив
      if (item.id == newTask.id) {
        //? сравнивает, если айди нового таска равен айди какого-нибудь элемента в массиве
        return newTask; //? возвращается новый объект
      }
      return item; //? если проверка не проходит, старый объект не меняется
    });
    setTodos(newTodos); //? меняем состояние и перерисовываем компонент
  };

  console.log(editTodo);
  return (
    <div>
      {/* отображаем компоненты AddTodo и передаем туда данные из App */}
      <AddTodo handleTask={handleTask} todos={todos} setTodos={setTodos} />
      <TodoList
        changeStatus={changeStatus}
        todos={todos}
        deleteTodo={deleteTodo}
        handleEdit={handleEdit}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        handleEditSave={handleEditSave}
      />
    </div>
  );
};
// создаем AddTodo.jsx и отображаем таск
export default App;
