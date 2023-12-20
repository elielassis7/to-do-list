import { PlusCircle } from 'phosphor-react'
import styles from './CreateTaskBar.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

export interface TaskType{
  description: string;

}[]




export function CreateTaskBar(){
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
 
  return(
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
  )
}