import styles from './EmptyTask.module.css'
import ImageEmpty from '../assets/ImageEmpty.svg'

export function EmptyTask(){
  return(
    <div className={styles.container}>
      <img src={ImageEmpty} alt="" />
      <div >
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      

    </div>
  )
}