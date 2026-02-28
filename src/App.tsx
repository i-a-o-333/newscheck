const App = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        padding: '2rem',
        background: '#0f172a',
        color: '#e2e8f0',
      }}
    >
      <section style={{ maxWidth: 760, textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>News Intelligence Analyzer</h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#cbd5e1' }}>
          Your deployment is now loading a valid React entrypoint. If you were previously seeing a
          blank page on GitHub Pages, that was due to missing app source files and a deploy
          workflow that published source files instead of the production build output.
        </p>
      </section>
    </main>
  );
};

export default App;
