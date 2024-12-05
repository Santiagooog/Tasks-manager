import './TodoSearch.css'
import React from 'react'

export function TodoSearch({searchValue, setSearchValue}){
  return(
    <div className='mb-10'>
    <input className='h-14 rounded-2xl bg-slate-800 border border-slate-200 outline-none focus:bg-slate-700 hover:cursor-pointer ' 
    placeholder="🔎"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value)
      
    }}
    >
    </input>
    </div>
  )
}