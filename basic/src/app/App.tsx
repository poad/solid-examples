import { Counter } from '../components/Counter';
import { type JSX } from 'solid-js/jsx-runtime';
import { A } from '@solidjs/router';
import styles from './App.module.css';

export default function App(): JSX.Element {
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
