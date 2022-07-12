import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Instagram } from "react-feather";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import ToDo from "./components/ToDo";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  const AppendTask = (value) => {
    const newTask = {
      id: Math.random(),
      name: value,
      checked: false,
    };
    setTasks([...tasks, newTask]);
  };

  const RemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeChecked = (id, isOn) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.checked = isOn;
        }
        return task;
      })
    );
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>
        <div>
          {tasks.map((task, index) => (
            <ToDo
              key={index}
              id={task.id}
              name={task.name}
              removeTask={RemoveTask}
              changeChecked={changeChecked}
              checked={task.checked}
            />
          ))}
          <Form appendTask={AppendTask} />
        </div>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
