import './index.css';
// @ts-expect-error: known issue, we're working on it
import { App } from './App.tsrx';
import { mount } from 'ripple';

const target = document.getElementById('root');
if (target) {
  mount(App, {
    target,
  });
}
