import { ChangeEvent, useState } from 'react'
import styles from './App.module.css'
import logo from './assets/logo.svg'
import { Tasks } from './components/Tasks'
import { PlusCircle } from 'phosphor-react'

export function App() {
  const [newTask, setNewTask] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="ToDo Logotipo" width={126} height={48} />
        <div className={styles.newTask}>
          <input
            type="text"
            name=""
            id=""
            data-filled={newTask !== ''}
            value={newTask}
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
          />
          <button type="button">
            Criar
            <PlusCircle size={16} />
          </button>
        </div>
      </header>
      <main>
        <Tasks />
      </main>
    </div>
  )
}
