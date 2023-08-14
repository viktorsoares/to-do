import { useState } from "react";

import Todo from "./components/Todo";

import Form from "./components/Form";

import "./App.css";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodo] = useState([
    { id: 1, text: "criar projeto", category: "study", isCompleted: false },
    { id: 2, text: "criar projeto2", category: "study", isCompleted: false },
    { id: 3, text: "criar projeto3", category: "study", isCompleted: false },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    //recebe todos os todos atuais
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 6000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodo(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filterTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodo(filterTodos);
  };

  const compleTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodo(newTodos);
  };

  return (
    <div className="app">
      <h1>TO-DO List</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              compleTodo={compleTodo}
            />
          ))}
      </div>
      <Form addTodo={addTodo} />
    </div>
  );
}

export default App;
