import { ITask } from 'src/types/task';
import styles from './styles.module.scss';

interface TaskListProps {
  taskList: ITask[];
  handleDelete(id: string): void;
  handleEdit(task: ITask): void;
}

export const TaskList = ({
  taskList,
  handleDelete,
  handleEdit,
}: TaskListProps) => {
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
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Você não possui tarefas cadastradas</p>
      )}
    </>
  );
};
