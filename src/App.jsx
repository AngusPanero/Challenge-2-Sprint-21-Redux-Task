import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "./todosSlice";
import { useState } from "react";

const App = () => {
  const tasks = useSelector((state) => state.todosSelector.tasks); // accede al estado, actua sobre el state
  const dispatch = useDispatch(); // se usa para enviar la actualizacion del estado, actua sobre el action
  const [ task, setTask ] = useState("")

  const handleTask = () => {
    if(task.trim() !== ""){
      dispatch(addTask({
        id: Math.random(),
        title: task}))
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
          <li key={task.id}>
            {task.title}<button onClick={() => dispatch(removeTask(index))}>Eliminar</button>
          </li>)}
      </ul>
    </div>
  );
};

export default App;
