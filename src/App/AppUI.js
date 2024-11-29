import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoLoading } from '../TodoLoading'
import { TodoError } from '../TodoError'
import { TodoEmpty } from '../TodoEmpty'
import { Modal } from '../Modal'


export function AppUI({
  loading,
  error,
  completedTask,
  totalTask,
  searchValue,
  setSearchValue,
  searchedTasks,
  completeTodo,
  deleteTodo,
  addTodo,
  open,
  setOpen,
  opened,
  setOpened,
  inputTodo,
  setInputTodo
} 
){
  return(
  <>
      <TodoCounter completed={completedTask} total={totalTask} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
      {loading && <TodoLoading/>}
      {error && <TodoError/>}
      {(!loading && searchedTasks.length === 0) && <TodoEmpty/>}
        {searchedTasks.map((todo) => (

          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton
      open={open}
      setOpen={setOpen}
      opened ={opened}
      setOpened={setOpened}
      />
      {open && <Modal
      addTodo = {addTodo}
      setOpen={setOpen} 
      opened ={opened}
      setOpened={setOpened}
      inputTodo = {inputTodo}
      setInputTodo={setInputTodo}
      />}

    </>
)}