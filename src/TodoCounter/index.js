import './TodoCounter.css';
import  { TodoEmpty } from'../TodoEmpty/index.js'
export function TodoCounter({completed, total}){
  const probar = total === 0 && completed ===0
  return(
    <div className='p-4 bg-slate-800 w-3/4 min-h-44 rounded-xl mb-10 flex justify-center mt-5'>
      <h1 id='main-title' className='text-slate-300 text-6xl'>
        {probar ? <TodoEmpty/> : `Has completado ${completed} de ${total} tareas.`}
      </h1>
    </div>
  )
}

