import { type JSX } from "@solidjs/web/jsx-runtime";
import { createSignal } from "solid-js";

export function Counter(): JSX.Element {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}>-</button>
      <input readonly value={count()} style={{ "text-align": "center" }} />
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
}
