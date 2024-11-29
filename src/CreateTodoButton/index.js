import './CreateTodoButton.css'

export function CreateTodoButton({open,setOpen, opened, setOpened}) {
  return(
    <div>
      <button
      className='btn-add'
      onClick={()=>{
        setOpen(true)
        setOpened('block')
      }}
      >
        +
      </button>
      <div>

      </div>
    </div>
  )
}

