import { createRouter } from "@solidjs/router";

import "./index.css";
/* @refresh reload */
import { render } from "@solidjs/web";

import App from "./App";
import About from "./pages/about";
import Test from "./pages/test/[id]";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

const Router = createRouter({
  routes: [
    { path: "/", component: App },
    { path: "/about", component: About },
    { path: "/test/:id", component: Test },
  ],
});
if (root) {
  render(() => <Router>{(props) => props.children}</Router>, root);
}
