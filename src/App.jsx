import "./App.css";
import { ContextProvider } from "./Context/DataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./Pages/ErrorPage";
import MainLayout from "./Pages/Layout/MainLayout";
import Home from "./Pages/Home";
import AuthLayout from "./Pages/Layout/AuthLayout";
import Login from "./Components/Authentication/Login";
import About from "./Pages/About";
import BlogPage from "./Pages/BlogPage";
import BlogDetails from "./Pages/BlogDetails";
import PackageDetail from "./Pages/PackageDetail";
import Packages from "./Pages/Packages";
import ContactUs from "./Pages/ContactUs";
import BookingForm from "./Components/Modal/BookingForm";

function App() {
  return (
    <>
      <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="about-us" element={<About />} />
                <Route path="blog-page" element={<BlogPage />} />
                <Route path="packages" element={<Packages />} />
                <Route path="blog-details/:slug" element={<BlogDetails />} />
                <Route path="package-details/:slug" element={<PackageDetail />} />
                <Route path="contact-us" element={<ContactUs />} />
              </Route>
              <Route path="/authentication" element={<AuthLayout />}>
                <Route path="log-in" element={<Login />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <ToastContainer />
              <BookingForm />
          </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
