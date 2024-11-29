import './TodoCounter.css';
import  { TodoEmpty } from'../TodoEmpty/index.js'
export function TodoCounter({completed, total}){
  const probar = total === 0 && completed ===0
  return(
    <h1 id='main-title'>
      {probar ? <TodoEmpty/> : `Has completado ${completed} de ${total} tareas.`}
    </h1>
  )
}

