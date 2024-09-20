import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import ThemedComponent from './ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggleButton />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
