import { Footer } from './components/Footer';
import { Header } from './components/Header';
import styles from './App.module.scss';
import './styles/global.scss';

export const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <div>
          <h2>Your Content</h2>
        </div>
      </main>
      <Footer />
    </>
  );
};
