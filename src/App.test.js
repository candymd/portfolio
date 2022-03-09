import { render, screen } from '@testing-library/react';
import App from './App';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

test('renders learn react link', () => {
  const app = render(<App />);
  const hero = render(<Hero />);
  const projects = render(<Projects />);
  const skills = render(<Skills />);
  const contact = render(<Contact />);
  // expect(app).toContain(hero, projects, skills, contact);
  console.log(app);
});

