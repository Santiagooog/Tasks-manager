import './TodoItem.css'
export function TodoItem({text, completed, onComplete, onDelete}){
  const completado = completed ? 'completed' : 'none' 
  const completad = completed ? 'completed-field' : 'none'
  return (
    <li className='w-10/12 h-24 flex justify-between items-center rounded-3xl bg-zinc-900'>
      <button className={completado}
      onClick={() => {onComplete()}}
      >✔</button>
      <p className={completad}>{text}</p>
      <button className='bg-red-500 w-10 h-10 rounded-full mr-2'
      onClick={() => {onDelete()}}
      >✖</button>
    </li>
  );
}
