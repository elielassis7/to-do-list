import { Trash } from "phosphor-react";
import styles from './Tasks.module.css'
import { useState, ChangeEvent } from "react";

interface TaskProps{
  description:string;
  onCheckChange: (value: boolean) => void;
  onDelete: (description: string) => void
}






export function Tasks({description, onCheckChange, onDelete}:TaskProps){
  const [check, setCheck] = useState(false)

  function handleChecked(event: ChangeEvent<HTMLInputElement>){
    setCheck(event.target.checked)
    onCheckChange(event.target.checked)
  }

  function handleDeleteTask(){
    onDelete(description)
  }

  return(
        <div className={styles.taskContainer}>
          <input type="checkBox" name="" checked={check} onChange={handleChecked} className={styles.check}/>
          {check ? <span className={styles.textChecked}>{description }</span> : <span className={styles.text}>{description }</span> }
          
          <Trash size={24} className={styles.trash} onClick={handleDeleteTask}/>
        </div>
    
  )}