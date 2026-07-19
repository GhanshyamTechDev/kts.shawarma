import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import OrderNowPage from './pages/OrderNowPage'

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/order-now" element={<OrderNowPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
    <Footer />
    <a className="whatsapp-float" href="https://wa.me/918977263080?text=Hi%20KT%27s%20Shawarma%20%26%20Grill%2C%20I%27d%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer" aria-label="Chat with KT's Shawarma & Grill on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a13 13 0 0 0-11.1 19.8L3.5 29l6.4-1.4A13 13 0 1 0 16 3Zm0 23.6c-2 0-4-.5-5.7-1.6l-.4-.2-3.8.8.8-3.7-.3-.4A10.6 10.6 0 1 1 16 26.6Zm5.8-7.9c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.2-.8 1-.9 1.2-.3.3-.6.1a8.5 8.5 0 0 1-2.5-1.6 9.3 9.3 0 0 1-1.7-2.2c-.2-.3 0-.5.1-.6l.5-.6.2-.5c.1-.2 0-.4 0-.5l-1-2.4c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.5.1-.8.4s-1 1-1 2.5 1 3 1.1 3.2c.1.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.8.6.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.4s.3-1.3.2-1.4-.2-.2-.5-.3Z" /></svg>
    </a>
  </>
}

export default App
