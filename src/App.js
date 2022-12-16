import "./App.css";
import { useState } from "react";
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { getUser } from "./utilities/users-service";
import UserNav from "./components/UserNav";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <nav id="NavBar">
            <NavBar path="/orders" linkText="Order History" />
            &nbsp; | &nbsp;
            <NavBar path="/orders/new" linkText="New Order" />
            &nbsp; | &nbsp;
            <UserNav name={getUser().name} />
          </nav>
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
