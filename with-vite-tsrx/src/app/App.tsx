import Counter from '../components/counter.tsrx';
import styles from './App.module.css';

export function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          <a href="/about">about</a>
        </p>
        <p>
          <a href="/test/hoge">test</a>
        </p>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  );
}
