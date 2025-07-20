import ProductsPage from './pages/ProductsPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.tsx';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
