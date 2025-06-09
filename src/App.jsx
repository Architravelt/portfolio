import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import ProductLanding from './pages/ProductLanding';
import TechDoc from './pages/TechDoc';
import RileyForm from './pages/RileyForm';
import Tribute from './pages/Tribute';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="documentation" element={<TechDoc />} />
        <Route path="form" element={<RileyForm />} />
        <Route path="product" element={<ProductLanding />} />
        <Route path="tribute" element={<Tribute />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
