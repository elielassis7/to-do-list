import { Header } from "./components/Header";
import { TasksCompleted } from "./components/TasksCompleted";
import { TasksCreated } from "./components/TasksCreated";
import './global.css'
import styles from './App.module.css'
import { PlusCircle } from "phosphor-react";
import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";
import { EmptyTask } from "./components/EmptyTask";
import { Tasks } from "./components/Tasks";

export interface TaskType{
  description: string;

}

export function App() {

  const [tasks, setTasks] = useState([''])

  const [newText, setNewText] = useState('')

  function createTask(event: FormEvent){
    event.preventDefault();
    
    setTasks([...tasks, newText])
    setNewText('')
    
  }
  
  function handleNewText(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewText(event.target.value)
  }
  
  function handleNewTextInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse campo é obrigatorio!')
  }
  
  const [check, setCheck] = useState(0);

  function handleCheckChange(value: boolean) {
    if (value != false){
      setCheck(check + 1 )
    }else{
      setCheck(check - 1)
    }
  }

  const tasksNoVoid = tasks.filter(item => item !== '').length;

  function deleteTask(deleteTasks: string){
    const taskForDelete = tasks.filter(task => {return task != deleteTasks})
    setTasks(taskForDelete)
    setCheck(check - 1)
  }

  return (
    <div className={styles.body}>
      <Header/>
      <div className={styles.taskMenu}>
        <div className={styles.bar}>
          <form onSubmit={createTask} className={styles.form}>
            <input 
              className={styles.input} 
              onChange={handleNewText} 
              onInvalid={handleNewTextInvalid}
              value={newText}
              type="text" 
              required 
              name="description" 
              placeholder="Nova tarefa"

            />
          <button className={styles.btn} type="submit">
            Criar
            <PlusCircle/>
          </button>
        </form>
      
      </div>
        
        <div className={styles.subMenu}>
          <TasksCreated numberCreated={tasksNoVoid}/>
          <TasksCompleted numberCreated={tasksNoVoid} numberCheck={check}/>
        </div>
        <div>
          {tasks.length > 1 ?  tasks.filter(item => item !== '').map(item => (
              <Tasks key={item} description={item} onCheckChange={handleCheckChange} onDelete={deleteTask}/>
          )) : <EmptyTask/>}
        
        {/* <EmptyTask/>
        {tasks.map(item => (
             <Tasks key={item.description} description={item.description} checked={item.checked}/>
        ))} */}
        </div>
        
       
      </div>
    </div>
    
  )
}


