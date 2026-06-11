import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <main className="app">
      <section className="counter">
        <h1>React Counter App</h1>
        <p className="counterValue">{count}</p>

        <div className="actions">
          <button className="button primary" type="button" onClick={increaseCount}>
            Увеличить
          </button>
          <button className="button secondary" type="button" onClick={resetCount}>
            Сбросить
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
