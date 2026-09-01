import { createSignal } from 'solid-js';

export default function Counter() @{
  const [count, setCount] = createSignal(0);

  <>
    <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}>
      -
    </button>
    <input readOnly value={count()} style={{ 'text-align': 'center' }} />
    <button onClick={() => setCount((prev) => prev + 1)}>+</button>
  </>
}
