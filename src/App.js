import React,{useState,useEffect} from "react";

// custom hooks
import useLocalStorage from './hooks/useLocalStorage'

import CustomForm  from "./components/CustomForm";
import TaskList from './components/TaskList'
import EditForm from './components/EditForm'

function App() {

  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) =>{
    console.log(task);
    setTasks(prevTasks => [...prevTasks, task]);
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

// will pass this addTask fuction as props

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
     
      <CustomForm addTask = {addTask}/>
     {tasks && (<TaskList 
     tasks= {tasks}
     deleteTask={deleteTask}
     toggleTask={toggleTask}
     enterEditMode={enterEditMode}
     />)}

{
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask= {updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
    </div>
  );
}

export default App;
