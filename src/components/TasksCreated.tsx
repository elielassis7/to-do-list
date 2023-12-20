import styles from './TasksCreated.module.css'

interface CreatedProps {
  numberCreated: number;
}

export function TasksCreated({numberCreated}: CreatedProps ){
  return(
    <div>
      <strong className={styles.text}>Tarefas criadas</strong>
      <span className={styles.counter}>{numberCreated}</span>
      
      
    </div>
  )
}