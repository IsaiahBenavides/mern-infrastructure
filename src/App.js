import './App.css';
import { useState } from 'react'
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AuthPage from './pages/AuthPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  const [user, setUser] = useState({})

  return (
    <main className='App'>
      {
        user ?
          <>
            <nav id='NavBar'>
              <NavBar
                path="/orders"
                linkText="Order History"
              />
              <NavBar
                path="/orders/new"
                linkText="New Order"
              />
            </nav>
            <Routes>
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/orders/new" element={<NewOrderPage />} />
            </Routes>
          </>
          :
          <AuthPage />
      }
    </main>
  )
}

export default App;
