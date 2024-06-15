import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(tasksFromStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (taskDescription) => {
    const newTask = { description: taskDescription, isEditing: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const removeTask = (taskIndex) => {
    setTasks(prevTasks => prevTasks.filter((_, index) => index !== taskIndex));
  };

  const modifyTask = (taskIndex, newDescription, isEditing) => {
    setTasks(prevTasks => prevTasks.map((task, index) =>
      index === taskIndex ? { ...task, description: newDescription, isEditing } : task
    ));
  };

  return (
    <div className="App">
      <h1>Task Organizer</h1>
      <TaskInput onAddTask={addNewTask} />
      <TaskList tasks={tasks} onDeleteTask={removeTask} onUpdateTask={modifyTask} />
    </div>
  );
};

export default App;
