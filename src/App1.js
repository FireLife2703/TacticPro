import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import CatalogPage from "./pages/CatalogPage";
import DeliveryPage from "./pages/DeliveryPage";
import ReturnPolicyPage from "./pages/ReturnPolicyPage"; // ✅ добавлено

import logo from "./assets/Logo.jpg";
import visa from "./assets/Visa.jpeg";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-[#111] font-sans flex flex-col">
        {/* HEADER */}
        <header className="bg-black text-white px-8 py-6 shadow-md">
          <div className="flex justify-between items-center w-full">
            <Link to="/" className="flex items-center space-x-4">
              <span className="text-3xl md:text-5xl font-bold whitespace-nowrap">
                <span className="text-blue-400">TacticPro UA</span>{' '}
                <span className="text-yellow-400 text-2xl">
                  — Якісне спорядження для тих хто тримає оборону
                </span>
              </span>
            </Link>
            <img src={logo} alt="Logo" className="h-24 ml-6" />
          </div>

          <nav className="mt-4 text-lg text-white flex justify-end space-x-8">
            <Link to="/" className="hover:underline">Головна</Link>
            <Link to="/catalog" className="hover:underline">Каталог</Link>
            <Link to="/cart" className="hover:underline">Кошик</Link>
            <Link to="/contact" className="hover:underline">Контакти</Link>
            <Link to="/delivery" className="hover:underline">Оплата та доставка</Link>
            <Link to="/return" className="hover:underline">Обмін та повернення</Link> {/* ✅ добавлено */}
          </nav>
        </header>

        {/* MAIN */}
        <main className="p-4 flex-grow bg-[#f5f5f5]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/return" element={<ReturnPolicyPage />} /> {/* ✅ добавлено */}
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#2a2f2a] text-white p-4 mt-8 flex justify-between items-center">
          <img src={visa} alt="Visa" className="h-8" />
          <span className="text-lg font-medium text-center">
            &copy; {new Date().getFullYear()} TacticPro UA — Всі права захищені.
          </span>
          <img src={logo} alt="Logo" className="h-20" />
        </footer>
      </div>
    </Router>
  );
}
