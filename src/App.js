import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import "./Components/Navbar/Navbar.css";
import TaskList from "./Components/TaskList/TaskList";
import "./Components/TaskList/TaskList.css";
import { useState } from "react";

let idAcc = 0;
const genereteId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);
  //Adicionar uma Nova Tarefa
  const addTask = (title, state) => {
    const newTask = {
      id: genereteId(),
      title,
      state
    };
    setTasks((existingTask) => {
      return [...existingTask, newTask];
    });
  };
  //Atualizar Tarefa
  const updateTask = (id, title, state) => {
    setTasks((existingTask) => {
      return existingTask.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  //Apagar Tarefa
  const onDeleteTask = (id) => {
    setTasks((existingTask) => {
      return existingTask.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Sprint Backlog"
          onAddTask={addTask}
          taskState="Sprint Backlog"
          tasks={tasks.filter((t) => t.state === "Sprint Backlog")}
          onTaskUpdate={updateTask}
          onDeleteTask={onDeleteTask}
        />
        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={onDeleteTask}
        />
        <TaskList
          title="Teste"
          onAddTask={addTask}
          taskState="Teste"
          tasks={tasks.filter((t) => t.state === "Teste")}
          onTaskUpdate={updateTask}
          onDeleteTask={onDeleteTask}
        />
        <TaskList
          title="Pronto"
          onAddTask={addTask}
          taskState="Pronto"
          tasks={tasks.filter((t) => t.state === "Pronto")}
          onTaskUpdate={updateTask}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}
