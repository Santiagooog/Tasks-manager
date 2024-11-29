import './TodoSearch.css'
import React from 'react'

export function TodoSearch({searchValue, setSearchValue}){
  return(
    <div className='container-input'>
    <input className='search' 
    placeholder="Tarea"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value)
      
    }}
    >
    </input>
    </div>
  )
}