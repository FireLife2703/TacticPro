import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg";
import visa from "../assets/Visa.jpeg";

export default function Header() {
  return (
    <>
      {/* Шапка */}
      <header className="bg-black text-white px-6 py-6 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex flex-col">
            <span className="text-blue-400 text-4xl font-bold leading-none">TacticPro UA</span>
            <span className="text-yellow-400 text-lg">Якісне спорядження для тих хто тримає оборону</span>
          </Link>
          <img src={logo} alt="Logo" className="h-20 w-auto ml-6" />
        </div>
        <nav className="space-x-6 text-lg">
          <Link to="/" className="hover:underline">Головна</Link>
          <Link to="/catalog" className="hover:underline">Каталог</Link>
          <Link to="/cart" className="hover:underline">Кошик</Link>
          <Link to="/contact" className="hover:underline">Контакти</Link>
        </nav>
      </header>

      {/* Подвал */}
      <footer className="bg-[#2a2f2a] text-white py-6 px-6 mt-8 flex justify-between items-center">
        <img src={visa} alt="Visa" className="h-10" />
        <span className="text-lg font-medium text-center flex-1">
          &copy; {new Date().getFullYear()} TacticPro UA — Всі права захищені.
        </span>
        <img src={logo} alt="Logo" className="h-20 w-auto" />
      </footer>
    </>
  );
}
