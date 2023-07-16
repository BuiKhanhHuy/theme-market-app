import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Body from './layouts/Body';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CustomDevelopmentPage from './pages/CustomDevelopmentPage';

import DashboardBody from './layouts/DashboardBody';


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Body />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/custom-development"
            element={<CustomDevelopmentPage />}
          />
        </Route>
        <Route path="/dashboard" element={<DashboardBody />}>
          {/* <Route path="/" element={<HomePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
