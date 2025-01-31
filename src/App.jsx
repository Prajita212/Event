import { BrowserRouter, Link, Route, Router, Routes } from "react-router";
import Header from "./components/Header";
import Section from "./components/section";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-500 to-gray-400"'>
      <Header />
      <Section />
      <Footer />
      
    </div>
  );
}

export default App;
