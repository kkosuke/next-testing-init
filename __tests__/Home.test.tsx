import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index';

describe('Home test', () => {
  it('Should render hello text', () => {
    render(<Home />);
    //screen.debug()
    expect(screen.getByText('Welcome to Next.js')).toBeInTheDocument();
  });
});
