import clipboard from '../assets/clipboard.svg'
import { Task, TaskType } from './Task'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: TaskType[]
}

export function Tasks({ tasks }: TasksProps) {
  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        <div>
          <strong className={styles.createdTaskLabel}>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div>
          <strong className={styles.completedTaskLabel}>Concluídas</strong>
          <span>0</span>
        </div>
      </div>
      <div className={`${styles.tasks} ${styles.tasksEmpty}`}>
        <img src={clipboard} alt="" width={56} height={56} />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
      <div className={`${styles.tasks}`}>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              isCompleted={task.isCompleted}
            />
          )
        })}
      </div>
    </div>
  )
}
