import { Footer } from './components/Footer';
import { Header } from './components/Header';
import styles from './App.module.scss';
import './styles/global.scss';
import { TaskForm } from './components/TaskForm';
import { useState } from 'react';
import { ITask } from './types/task';
import { TaskList } from './components/TaskList';

export const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: string) => {
    const copyTaskList = [...taskList];
    const index = copyTaskList.findIndex((task) => task.id === id);
    copyTaskList.splice(index, 1);
    setTaskList(copyTaskList);
  };

  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <div>
          <h2>O que você vai fazer ?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </>
  );
};
