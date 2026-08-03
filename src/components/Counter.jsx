function Counter({ count }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <p style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>Current count</p>
      <h2 style={{ fontSize: '3rem', margin: 0 }}>{count}</h2>
    </div>
  );
}

export default Counter;
