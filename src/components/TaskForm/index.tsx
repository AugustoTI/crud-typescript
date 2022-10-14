import {
  ChangeEvent,
  FormEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { ITask } from 'src/types/task';
import styles from './styles.module.scss';

interface TaskFormProps {
  btnText: string;
  taskList: ITask[];
  setTaskList?: Dispatch<SetStateAction<ITask[]>>;
}

export const TaskForm = ({ btnText, taskList, setTaskList }: TaskFormProps) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState(1);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'title') {
      setTitle(target.value);
    } else {
      setDifficulty(parseInt(target.value));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title || !difficulty) return;
    if (difficulty <= 0) return;

    if (setTaskList) {
      setTaskList([
        ...taskList,
        { title, difficulty, id: Math.random().toString(36).substring(2, 15) },
      ]);
    }

    setTitle('');
    setDifficulty(1);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input_wrapper}>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          placeholder="Titulo da tarefa"
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="difficulty">Dificuldade</label>
        <input
          type="number"
          id="difficulty"
          min={1}
          value={difficulty}
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>
      <button className={styles.button} type="submit">
        {btnText}
      </button>
    </form>
  );
};
