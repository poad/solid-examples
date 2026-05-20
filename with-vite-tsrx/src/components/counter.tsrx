import { createSignal } from 'solid-js';
import { type JSX } from 'solid-js/jsx-runtime';

export default component Counter() {
  const [count, setCount] = createSignal(0);

  <>
    <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}>
      -
    </button>
    <input readOnly value={count()} style={{ 'text-align': 'center' }} />
    <button onClick={() => setCount((prev) => prev + 1)}>+</button>
  </>
}
