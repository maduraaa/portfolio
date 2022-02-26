import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Layout from './layout/Layout';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /> </Layout>} />
        <Route path="/about" element={<Layout><About /> </Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
