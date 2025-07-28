import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
