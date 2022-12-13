import './App.css';
import { useState } from 'react'
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AuthPage from './pages/AuthPage';
import { Routes } from 'react-router-dom';


function App() {
  const [ user, setUser ] = useState(null)

  return (
    <main className='App'>
      {
        user ?
        <Routes>
          
        </Routes>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
