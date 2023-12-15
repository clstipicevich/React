import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const newTasks = [...tasks, { id: Date.now(), name, isCompleted: false }];
    setTasks(newTasks);
  };

  const toggleComplete = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, isCompleted: !task.isCompleted};
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;