import { ITask } from 'src/types/task';
import styles from './styles.module.scss';

interface TaskListProps {
  taskList: ITask[];
}

export const TaskList = ({ taskList }: TaskListProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task_container}>
            <div className={styles.task_details}>
              <h3>{task.title}</h3>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.task_actions}>
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>Você não possui tarefas cadastradas</p>
      )}
    </>
  );
};
