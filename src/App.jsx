import ReactLenis from "lenis/react";
import "./App.css";
import { ContextProvider } from "./Context/DataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./Pages/ErrorPage";
import MainLayout from "./Pages/Layout/MainLayout";
import Home from "./Pages/Home";
import AuthLayout from "./Pages/Layout/AuthLayout";
import Login from "./Components/Authentication/Login";

function App() {
  return (
    <>
      <ContextProvider>
        <ReactLenis root options={{ duration: 1.5, smoothWheel: true }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
              </Route>
              <Route path="/authentication" element={<AuthLayout />}>
                <Route path="log-in" element={<Login />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <ToastContainer />
          </BrowserRouter>
        </ReactLenis>
      </ContextProvider>
    </>
  );
}

export default App;
