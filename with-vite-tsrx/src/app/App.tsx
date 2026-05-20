import Counter from '../components/counter.tsrx';
import { A } from '@solidjs/router';
import styles from './App.module.css';

export function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          <A href="/about">about</A>
        </p>
        <p>
          <A href="/test/hoge">test</A>
        </p>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  );
}
