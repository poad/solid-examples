/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Route, Router, Routes } from '@solidjs/router';
import About from './pages/about';
import Test from './pages/test/[id]';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(
  () => (
    <>
      <Router>
        <Routes>
          <Route path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/test/:id" component={Test} />
        </Routes>
      </Router>
    </>
  ),
  root!,
);
