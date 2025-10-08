import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Animation from "../../components/Animation/Animation";
import { useLocation } from "react-router";

const Root = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
        {loading && <Animation></Animation>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </div>
  );
};

export default Root;
