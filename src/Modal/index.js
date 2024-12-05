import './Modal.css'
export function Modal({setOpen, opened, setOpened, addTodo, inputTodo, setInputTodo}) {
  return(
    <div className="modal"
    style={
      {display:opened}
    }
    >
      <header>
      <button className='exit'
      onClick={
        ()=>{
          setOpen(false)
          setOpened('none')
        }
      }
      >X</button>
    </header>
      <h1>Crea una nueva tarea</h1>
      <div>
        Nombre de la tarea
        <input type="text"
        required
        value={inputTodo}
        onChange={(event)=>{
          setInputTodo(event.target.value)
        }
        }
        
        placeholder='Hacer trabajos'/>
      </div>
        <button
        onClick={()=>{
          setOpen(false)
          setOpened('none')
          console.log(inputTodo)
          addTodo(inputTodo)
          setInputTodo("")
        }}
        >Crear</button>
      
    </div>
    
  )
}