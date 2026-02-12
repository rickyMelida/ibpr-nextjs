import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';

// Componente de ejemplo para testear
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="nombre"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="email"
      />
      <button type="submit">Enviar</button>
      {submitted && <p>Formulario enviado</p>}
    </form>
  );
}

describe('Ejemplo de pruebas con React Testing Library', () => {
  it('renderiza el formulario', () => {
    render(<ContactForm />);
    
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('permite ingresar texto en los campos', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByLabelText('nombre');
    const emailInput = screen.getByLabelText('email');
    
    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
    fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
    
    expect(nameInput).toHaveValue('Juan Pérez');
    expect(emailInput).toHaveValue('juan@example.com');
  });

  it('muestra mensaje de confirmación al enviar', () => {
    render(<ContactForm />);
    
    const button = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(button);
    
    expect(screen.getByText('Formulario enviado')).toBeInTheDocument();
  });
});
