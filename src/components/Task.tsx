import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export interface TaskType {
  id: number
  description: string
  isCompleted: boolean
}

interface TaskProps {
  task: TaskType
  onDeleteTask: (taskId: number) => void
}

export function Task({ task, onDeleteTask }: TaskProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.description}>{task.description}</span>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <button type="button" onClick={() => onDeleteTask(task.id)}>
        <Trash width={13} height={14} />
      </button>
    </div>
  )
}
