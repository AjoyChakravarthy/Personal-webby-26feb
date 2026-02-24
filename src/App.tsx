import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import SelectedWorks from './components/SelectedWorks';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/tech" element={<TechStack />} />
        <Route path="/works" element={<SelectedWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
    </>
  );
}
