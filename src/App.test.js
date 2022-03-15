import { render, screen } from '@testing-library/react';
import App from './App';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

test('renders component App', () => {
  const app = render(<App />);
 
  expect(app).toBeInTheDocument;
});

test('renders component Header', () => {
  const header = render(<Header />);
 
  expect(header).toBeInTheDocument;
});

test('renders component AboutMe', () => {
  const aboutMe = render(<AboutMe />);
 
  expect(aboutMe).toBeInTheDocument;
});

test('renders component Contact', () => {
  const contact = render(<Contact />);
 
  expect(contact).toBeInTheDocument;
});

test('renders component Hero', () => {
  const hero = render(<Hero />);
 
  expect(hero).toBeInTheDocument;
});

test('renders component Footer', () => {
  const footer = render(<Footer />);
 
  expect(footer).toBeInTheDocument;
});

test('renders component Projects', () => {
  const projects = render(<Projects />);
 
  expect(projects).toBeInTheDocument;
});

test('renders component Skills', () => {
  const skills = render(<Skills />);
 
  expect(skills).toBeInTheDocument;
});



