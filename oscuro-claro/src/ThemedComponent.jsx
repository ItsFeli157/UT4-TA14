import React from 'react';
import { useTheme } from './ThemeContext';
import './ThemedComponent.css'; 

function ThemedComponent() {
  const { theme } = useTheme(); 

  return (
    <div className={`themed-container ${theme}`}>
      <h1>Este es un componente con tema {theme === 'light' ? 'Claro' : 'Oscuro'}</h1>
      <p>
        Cambia el tema usando el botón de arriba y observa cómo cambia el estilo de este componente.
      </p>
    </div>
  );
}

export default ThemedComponent;
