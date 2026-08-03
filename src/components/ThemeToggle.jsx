function ThemeToggle({ theme, onToggle }) {
  return (
    <button onClick={onToggle} aria-label="Toggle theme">
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default ThemeToggle;
