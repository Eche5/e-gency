import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthenticationContext";
import DashBoard from "./pages/DashBoard";
import PersistLogin from "./components/PersisLogin";

function App() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* {!auth?.accessToken && ( */}
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
          {/* )} */}
          {/* {auth?.accessToken && <Route path={`/:id`} element={<DashBoard />} />} */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
