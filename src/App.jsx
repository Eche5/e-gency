import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthenticationContext";
import PersistLogin from "./components/PersisLogin";
import { CategoryProvider } from "./context/CategorieContext";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import ProtectedRoute from "./components/ProtectedRoute";
const Rent = lazy(() => import("./pages/categories/Rent"));
const ViewRent = lazy(() => import("./pages/categories/ViewRent"));
const Sale = lazy(() => import("./pages/categories/Sale"));
const ViewSale = lazy(() => import("./pages/categories/ViewSale"));
const DashBoard = lazy(() => import("./pages/DashBoard"));

function App() {
  const { auth } = useAuth();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            {!auth?.accessToken && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </>
            )}
            {auth?.accessToken && (
              <Route element={<ProtectedRoute />}>
                <Route path={`/:id`} element={<DashBoard />} />
              </Route>
            )}
            <Route path="/categories" element={<CategoryProvider />}>
              <Route path="rent" element={<Rent />} />
              <Route path="rent/:id" element={<ViewRent />} />
              <Route path="sale" element={<Sale />} />
              <Route path="sale/:id" element={<ViewSale />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
