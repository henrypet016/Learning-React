import { useState} from 'react';

export default function Counter() {
  const [points, setPoints] = useState(0);

  function increment() {
    setPoints(s => s + 1)
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
      }}>+2</button>
      <h1>Score: {points}</h1>
    </>
  )
}