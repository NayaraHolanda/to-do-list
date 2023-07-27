import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export interface TaskType {
  id: number
  description: string
  isCompleted: boolean
}

export function Task({ description, isCompleted }: TaskType) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.description}>{description}</span>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <button type="button">
        <Trash width={13} height={14} />
      </button>
    </div>
  )
}
