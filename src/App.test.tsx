import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

// Para evitar problemas con el ThemeProvider, envolvemos el componente en un mock
const MockApp = () => (
    <App />
);

describe('App', () => {
  it('debería renderizar el título principal', () => {
    // Renderiza el componente
    render(<MockApp />);
    
    // Busca el texto en la pantalla y comprueba que existe
    expect(screen.getByText(/Generador de Planetas/i)).toBeInTheDocument();
  });
});