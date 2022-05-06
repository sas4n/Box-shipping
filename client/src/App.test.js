import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render navbar', () => {
    render(<App />);
    const navbar =  screen.getByRole('navbar');
    expect(navbar).toBeInTheDocument();
  })
})

