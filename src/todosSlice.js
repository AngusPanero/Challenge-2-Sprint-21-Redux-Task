import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
};

const todosSlice = createSlice({
    name: "Todos", // nombre del slice puedo poner lo que quiera es referenciador, tambien puedo cambiar el name
    initialState, 
    reducers:{ // los reducers son cada accion puntual
        addTask: (state, action) => { // es el valor inicial o estado global, y el action es la funcion a ejecutar sobre el state
            state.tasks.push(action.payload) // payload es por así decir cada indice puntual
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task, index) => index !== action.payload)
        }
    }
})

export const { addTask, removeTask } = todosSlice.actions // esto se va a app o a donde quiera usarlo
export default todosSlice.reducer; // esto se va al store