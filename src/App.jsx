import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './StoreContext';
import Header  from './components/Header';
import Footer  from './components/FooterComponent';
import ItemListContainer  from './containers/ItemListContainer';
import ItemDetailContainer  from './containers/ItemDetailContainer';
import './App.css'

function App() {
  const baseUrl = 'https://fakestoreapi.com/products';
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`${baseUrl}/categories`);
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
      <Header categories={categories} />
      <section className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer categoryName="home" url={baseUrl} />} />
          {categories.map((category, index) => (
          <Route key={index} path={`/category/${category}`} element={<ItemListContainer categoryName={category} url={`${baseUrl}/category/${category}`} />} />
          ))}
          <Route path={`/item/:id`} element={<ItemDetailContainer />} />
        </Routes>
      </section>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
