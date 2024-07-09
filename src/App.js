import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Agregar una nueva tarea"
      />
      <button onClick={addTask}>Agregar Tarea</button>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
