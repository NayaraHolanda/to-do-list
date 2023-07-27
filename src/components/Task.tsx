import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export function Task() {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <button type="button">
        <Trash width={13} height={14} />
      </button>
    </div>
  )
}
