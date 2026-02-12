import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provee la ruta a tu app de Next.js para cargar next.config.js y archivos .env en tu entorno de pruebas
  dir: './',
});

// Configuración personalizada de Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  
  // Agregar más opciones de setup antes de cada prueba
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
  // Patrones para ignorar archivos de prueba
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  
  // Transformar archivos CSS y otros assets
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  
  // Extensiones de archivos a considerar
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  
  // Cobertura de código
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**',
  ],
};

// createJestConfig es exportado de esta manera para asegurar que next/jest pueda cargar la configuración de Next.js que es asíncrona
export default createJestConfig(config);
