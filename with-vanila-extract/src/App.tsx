import { Counter } from "./components/Counter/index.jsx";
import logo from "./logo.svg";

import type { Component } from "solid-js";

import * as styles from "./app.css";

const App: Component = () => {
  return (
    <div class={styles.app}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  );
};

export default App;
