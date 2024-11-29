import React, { useState } from "react";
import "./App.css";
import {useLocalStorage} from './useLocalStorage'
import { AppUI } from './AppUI'

/*localStorage.removeItem('Tareas_V1')
const defaultTodos=[
  {text:"Lavar la loza", completed: true},
  {text:"Barrer", completed : true},
  {text:"Almorzar", completed:true},
  {text:"Cenar", completed:true},
  {text:"Hacer tareas", completed:true}
]

localStorage.setItem('Tareas_V1', JSON.stringify(defaultTodos))*/


export function App() {

  //const [] = React.useState()
  const [opened, setOpened] = React.useState('block')
  const [open, setOpen] = React.useState(false)
  const {loading,error,item, safeItem} = useLocalStorage('Tareas_V1', []);
  const [searchValue, setSearchValue] = React.useState(""); // Estado
  const [inputTodo, setInputTodo] = React.useState("")

  const completedTask = item.filter((todo) => todo.completed).length;
  const totalTask =item.length;
  //Buscando tareas
  const searchedTasks =item.filter((task) =>
    task.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addTodo = (newTodo) => {
    if(newTodo.length === 0){
      throw new Error("No has añadido ningun nombre a la tarea")
    }else{
      const objeto = {text:newTodo, completed:false}
      const todos = [...item] //Copia array de items
      const nuevaLista = todos.concat(objeto)
      safeItem(nuevaLista)
    }
    
  }

  const completeTodo = (text) => {
    const newTodos = [...item];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    if(newTodos[todoIndex].completed === true){
      newTodos[todoIndex].completed = false
    }else{
      newTodos[todoIndex].completed = true
    }
    
    safeItem(newTodos);
  };

  const deleteTodo = (text) => {
    const todosDelete = [...item];
    const todoDelete = todosDelete.filter((todo) => todo.text !== text);
    safeItem(todoDelete); 
  };

  return (
    <AppUI
    loading={loading}
    error={error}
    completedTask = {completedTask}
    totalTask = {totalTask}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTasks = {searchedTasks}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    addTodo = {addTodo}
    open = {open}
    setOpen={setOpen}
    opened={opened}
    setOpened={setOpened}
    inputTodo={inputTodo}
    setInputTodo = {setInputTodo}
    />
  );
}

export default App;
