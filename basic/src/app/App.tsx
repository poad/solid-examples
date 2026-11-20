import { type JSX } from "@solidjs/web/jsx-runtime";

import { Counter } from "../components/Counter";

import styles from "./App.module.css";

export default function App(): JSX.Element {
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
