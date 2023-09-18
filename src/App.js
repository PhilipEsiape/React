import './App.css';
import { useState } from 'react';
import Task from './Task';
function App(){
    const [todoList, setTodolist] =useState([]);
    const [newTask, setNewTask] = useState("")

  const handleChange = (event) =>{
      setNewTask(event.target.value)
    }

  const addTask =()=>{

    const task ={
      id: todoList.length ===0? 1: todoList[todoList.length-1].id +1,
      taskName: newTask,
      completed: false,
    }
    setTodolist([...todoList, task])
  }
  
  const deleteTask =(id)=>{
    setTodolist(todoList.filter((task)=>task.id !==id));
  }


    const completeTask=(id)=>{
      setTodolist(
        todoList.map((task)=>{
          if(task.id === id){
            return{...task, completed: true}
          } else{
            return task;
          }

        })
      
      )
  
  }
  return(
           <div className='App'>
               <div className='addTask'>
                <p>TODO LIST</p>
                <input placeholder=' Writ your to do list...'onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
                
                <p>LIST OF WORKS</p>
               <div className='list'>
                  {todoList.map((task)=>{
                      return(
                        <Task taskName = {task.taskName} 
                        id={task.id}
                        completed= {task.completed} 
                        deleteTask = {deleteTask}
                        completeTask = {completeTask}/>
                    
                      )

                  })}
               </div>
           </div>

    </div>
  )
}
export default App;