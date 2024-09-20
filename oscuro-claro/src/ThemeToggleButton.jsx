import React from 'react';
import { useTheme } from './ThemeContext';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'Tema Oscuro' : 'Tema Claro'}
    </button>
  );
}

export default ThemeToggleButton;
