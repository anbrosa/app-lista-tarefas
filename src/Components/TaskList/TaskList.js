import React from "react";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/plus-icon.svg";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount((currentCount) => {
  //     return currentCount + 1;
  //   });
  // };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            ></TaskItem>
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus"></img>
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}
TaskList.prototype = {
  title: PropTypes.string.isRequired,
  // count: PropTypes.number,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
