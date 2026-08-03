import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const increment = () => setCount((value) => value + 1);
  const decrement = () => setCount((value) => value - 1);
  const reset = () => setCount(0);
  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'));

  return (
    <div className={`app ${theme}`}>
      <div className="card">
        <header className="header">
          <div>
            <p className="eyebrow"></p>
            <h1>Counter Theme Switcher</h1>
          </div>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </header>

        <Counter count={count} />

        <div className="controls">
          <Button onClick={decrement}>-1</Button>
          <Button onClick={reset}>Reset</Button>
          <Button onClick={increment}>+1</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
