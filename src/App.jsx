import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "./todosSlice";
import { useState } from "react";

const App = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const [ task, setTask ] = useState("")

  const handleTask = () => {
    if(task !== ""){
      dispatch(addTask(task))
      setTask("")
    }
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Introduce una Tarea" />
      <button onClick={handleTask}>Agregar</button>

      <ul>
        {tasks.map((task, index) => 
          <li key={index}>
            {task} <button onClick={() => dispatch(removeTask(index))}>Eliminar</button>
          </li>)}
      </ul>
    </div>
  );
};

export default App;
