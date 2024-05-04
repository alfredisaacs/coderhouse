import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'
import CartProvider from './StoreContext'
import Header  from './components/layout/Header'
import Footer  from './components/layout/FooterComponent'
import CartContainer from './containers/CartContainer'
import ItemListContainer  from './containers/ItemListContainer'
import ItemDetailContainer  from './containers/ItemDetailContainer'
import './App.css'

function App() {
  const categorias = ['tv', 'tablets', 'cell phones', 'laptops']

  return (
    <BrowserRouter>
      <CartProvider>
      <Header categories={categorias} />
      <section className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer categoryName="home" />} />
          {categorias.map((category, index) => (
          <Route key={index} path={`/category/${category}`} element={<ItemListContainer categoryName={category} />} />
          ))}
          <Route path={`/item/:id`} element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </section>
      </CartProvider>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  )
}

export default App
