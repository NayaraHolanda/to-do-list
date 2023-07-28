import clipboard from '../assets/clipboard.svg'
import { Task, TaskType } from './Task'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: TaskType[]
  completeTask: (taskId: number) => void
  deleteTask: (taskId: number) => void
}

export function Tasks({ tasks, completeTask, deleteTask }: TasksProps) {
  const numberOfTasksCompleted = tasks.reduce((amount, task) => {
    return task.isCompleted ? amount + 1 : amount
  }, 0)

  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        <div>
          <strong className={styles.createdTaskLabel}>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div>
          <strong className={styles.completedTaskLabel}>Concluídas</strong>
          <span>
            {tasks.length !== 0
              ? `${numberOfTasksCompleted} de ${tasks.length}`
              : 0}
          </span>
        </div>
      </div>
      {tasks.length !== 0 ? (
        <div className={`${styles.tasks}`}>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onCompleteTask={completeTask}
                onDeleteTask={deleteTask}
              />
            )
          })}
        </div>
      ) : (
        <div className={`${styles.tasks} ${styles.tasksEmpty}`}>
          <img src={clipboard} alt="" width={56} height={56} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </div>
  )
}
