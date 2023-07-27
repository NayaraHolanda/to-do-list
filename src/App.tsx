import { ChangeEvent, useState, FormEvent } from 'react'
import styles from './App.module.css'
import logo from './assets/logo.svg'
import { Tasks } from './components/Tasks'
import { TaskType } from './components/Task'
import { PlusCircle } from 'phosphor-react'

const tasksDefault: TaskType[] = [
  {
    id: 1,
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  },
  {
    id: 2,
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  },
  {
    id: 3,
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true,
  },
  {
    id: 4,
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  },
  {
    id: 5,
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  },
]

export function App() {
  const [tasks, setTasks] = useState(tasksDefault)
  const [newTask, setNewTask] = useState('')
  const [lastId, setLastId] = useState(tasks.length)

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    if (newTask !== '') {
      const newTaskObject = {
        id: lastId + 1,
        description: newTask,
        isCompleted: false,
      }

      setTasks([...tasks, newTaskObject])
      setLastId((prevId) => prevId + 1)
      setNewTask('')
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="ToDo Logotipo" width={126} height={48} />
        <form onSubmit={handleCreateTask} className={styles.newTaskForm}>
          <input
            type="text"
            name=""
            id=""
            data-filled={newTask !== ''}
            value={newTask}
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
          />
          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
      </header>
      <main>
        <Tasks tasks={tasks} />
      </main>
    </div>
  )
}
