import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export interface TaskType {
  id: number
  description: string
  isCompleted: boolean
}

interface TaskProps {
  task: TaskType
  onCompleteTask: (taskId: number) => void
  onDeleteTask: (taskId: number) => void
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span
          className={`${styles.description} ${
            task.isCompleted ? styles.checked : styles.unchecked
          }`}
        >
          {task.description}
        </span>
        <input
          type="checkbox"
          onChange={() => {
            onCompleteTask(task.id)
          }}
          checked={task.isCompleted}
        />
        <span className={styles.checkmark}></span>
      </label>
      <button type="button" onClick={() => onDeleteTask(task.id)}>
        <Trash width={13} height={14} />
      </button>
    </div>
  )
}
