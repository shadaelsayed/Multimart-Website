import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DisplayProvider } from './context/DisplayProducts.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { WishListProvider } from './context/WishListContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <DisplayProvider>
    <AuthProvider>
      <WishListProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishListProvider>
    </AuthProvider>
  </DisplayProvider>
  </>
)
