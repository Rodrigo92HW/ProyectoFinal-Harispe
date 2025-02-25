import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './common/NavBar'
import Error404 from './common/Error404'
import ItemListContainer from './components/Items/ItemListContainer'
import ItemCategoryContainer from './components/Items/ItemCategoryContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer'
import { CartProvider } from './components/context/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemCategoryContainer/>} />
          <Route path="/category/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
