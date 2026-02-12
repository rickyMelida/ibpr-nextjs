import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

// Mock del store de Zustand
jest.mock('@/stores/uiStore', () => ({
  useUIStore: () => ({
    currentYear: 2026,
  }),
}));

describe('Footer Component', () => {
  it('renderiza el footer correctamente', () => {
    render(<Footer />);
    
    // Verificar que el título de contacto esté presente
    expect(screen.getByText('Contáctenos')).toBeInTheDocument();
  });

  it('muestra la información de contacto', () => {
    render(<Footer />);
    
    // Verificar teléfono
    expect(screen.getByText('021 527 168')).toBeInTheDocument();
    
    // Verificar email
    expect(screen.getByText('ibpr_mc@gmail.com')).toBeInTheDocument();
  });

  it('muestra el nombre de la iglesia', () => {
    render(<Footer />);
    
    expect(screen.getByText('Iglesia Evangélica Bautista Panambi Retá')).toBeInTheDocument();
  });

  it('contiene links de redes sociales', () => {
    render(<Footer />);
    
    // Verificar que existen los links de redes sociales
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('muestra el copyright con el año actual', () => {
    render(<Footer />);
    
    // El componente usa currentYear del store que mockeamos con 2026
    const copyrightText = screen.getByText(/2026/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
