import './TodoItem.css'
export function TodoItem({text, completed, onComplete, onDelete}){
  const completado = completed ? 'completed' : 'none' 
  const completad = completed ? 'completed-field' : 'none'
  return (
    <li>
      <button className={completado}
      onClick={() => {onComplete()}}
      >✔</button>
      <p className={completad}>{text}</p>
      <button className='eliminar'
      onClick={() => {onDelete()}}
      >✖</button>
    </li>
  );
}
