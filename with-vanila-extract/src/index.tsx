import { createRouter } from "@solidjs/router";
/* @refresh reload */
import { render } from "@solidjs/web";

import "./index.css";
import App from "./App";

const Router = createRouter({
  routes: [{ path: "/", component: App }],
});

const root = document.getElementById("root");
if (root) {
  render(() => <Router>{(props) => props.children}</Router>, root);
}
