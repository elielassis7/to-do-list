import styles from './TasksCompleted.module.css'

interface completedProps{
  numberCreated: number;
  numberCheck: number;
}

export function TasksCompleted({numberCreated, numberCheck}:completedProps){
  const text = `${numberCheck} de ${numberCreated}`

  return(
    <div>
      <strong className={styles.text}>Concluidas</strong>
      <span className={styles.counter}>{text}</span>
      
    </div>
  )
}