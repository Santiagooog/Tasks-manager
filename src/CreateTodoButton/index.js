import './CreateTodoButton.css'

export function CreateTodoButton({open,setOpen, opened, setOpened}) {
  return(
    <div className='mt-5'>
      <button
      className='bg-slate-400 w-16 h-16 rounded-full text-6xl mt-9'
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

