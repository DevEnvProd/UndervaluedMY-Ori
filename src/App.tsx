import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { Article } from './pages/Article';
import { Screener } from './pages/Screener';
import { Learn } from './pages/Learn';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<Article />} />
          <Route path="/screener" element={<Screener />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
