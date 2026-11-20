/* @refresh reload */
import { render } from '@solidjs/web';

import './index.css';
import { App } from './App';
import { createRouter } from '@solidjs/router';
import { About } from './pages/about.tsrx';
import Test from './pages/test/[id]/index.tsrx';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const Router = createRouter({
  routes: [
    { path:"/", component: App },
    { path: "/about", component: About },
    { path:"/test/:id", component: Test },
  ],
});

if (root) {
  render(() => <Router>{(props) => props.children}</Router>, root);
}
