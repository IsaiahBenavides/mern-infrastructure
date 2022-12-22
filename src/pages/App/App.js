import styles from "./App.module.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar";
import UserLogOut from "../../components/UserLogOut/UserLogOut";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      {user ? (
        <>
          <nav id="NavBar">
            <NavBar path="/orders" linkText="Order History" />
            &nbsp; | &nbsp;
            <NavBar path="/orders/new" linkText="New Order" />
            &nbsp; | &nbsp;
            <UserLogOut name={getUser().name} />
          </nav>
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
