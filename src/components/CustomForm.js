// rafc === for react snipatte
// https://heroicons.com/

import React,{useState,UseEffect} from 'react'
import {PlusIcon } from '@heroicons/react/24/solid'


 const CustomForm = ({addTask}) => {

const [task, setTask] = useState("")

const handleFormSubmit = (e) =>{
    e.preventDefault();
    // console.log(e);
    addTask({
        name:task,
        checked: false,
        id :Date.now()
    });
    setTask("");
}

  return (
    <form className='todo' 
    onSubmit={handleFormSubmit}>

    <div className="wrapper">
        <input 
        type='text'
        id='task'
        className='input'
        placeholder='Add Task'
        value={task}
        onInput={(e)=>setTask(e.target.value)}
        required
        autoFocus
        maxLength={65}
        />
        <label htmlFor="task" className='label'>Enter Task</label>
        
        <button 
        className="btn"
         aria-label='Add Task'
         type='submit'
        >
            <PlusIcon />
        </button>

    </div>

    </form>
  )
}

export default CustomForm