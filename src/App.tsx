import { Footer } from './components/Footer';
import { Header } from './components/Header';
import styles from './App.module.scss';
import './styles/global.scss';
import { TaskForm } from './components/TaskForm';
import { useState } from 'react';
import { ITask } from './types/task';

export const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);

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
      </main>
      <Footer />
    </>
  );
};
