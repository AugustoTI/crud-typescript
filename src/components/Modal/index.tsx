import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const closeModal = () => {
    const modal = document.querySelector('#modal') as HTMLDivElement;
    modal.classList.add('hide');
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Edite sua tarefa</h2>
        {children}
      </div>
    </div>
  );
};
