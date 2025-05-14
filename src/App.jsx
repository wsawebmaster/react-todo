import { useState } from "react";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Atualizar Portfólio",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Atualizar Currículo e LinkedIn",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Lógica de Programação",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Programação do Zero",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 5,
      text: "HTML, CSS e JavaScript",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 6,
      text: "Javascript Developer e Evolution",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 7,
      text: "Desenvolvimento de Jogos",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 8,
      text: "Typescript",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 9,
      text: "Frontend com Angular",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 10,
      text: "Angular Developer",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 11,
      text: "Vue",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 12,
      text: "Java + Angular",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 13,
      text: "Docker Fundamentals",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 14,
      text: "Git + GitHub + Github Copilot + GitHub Actions",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 15,
      text: "PHP Experience",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 16,
      text: "Phyton",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 17,
      text: "Kanban + Scrum + Yellow Belt",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 18,
      text: "Preparatório para Certificação Azure DP-100 + AWS",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 19,
      text: "SQL Database Specialist(MongoDB+PostgreeSQL)",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 20,
      text: "Power BI",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 21,
      text: "C# + .NET",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 22,
      text: "React Developer",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 23,
      text: "Nest + Jest",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 24,
      text: "Laravel 12",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 25,
      text: "Java + Spring Boot",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
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
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
