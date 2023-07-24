import { ChangeEvent, useState } from 'react'
import styles from './App.module.css'
import logo from './assets/logo.svg'
import plus from './assets/plus.svg'

function App() {
  const [newTask, setNewTask] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} className="logo" alt="ToDo Logotipo" />
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
            <img src={plus} alt="plus" width="16" height="16" />
          </button>
        </div>
      </header>
      <main>
        <h1>Teste</h1>
      </main>
    </div>
  )
}

export default App
