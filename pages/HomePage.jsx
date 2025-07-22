import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../assets/58418511516528.webp';
import banner2 from '../assets/banner2.webp';
import products from '../data/products_with_all_images.json';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    "Маскувальні сітки",
    "Плитоноски та пластини",
    "Балістичний захист",
    "Тактичні ремені та РПС",
    "Аксесуари для зброї",
    "Тактичні підсумки",
    "Рюкзаки, сумки",
    "Шоломи, аксесуари",
    "Тактичний одяг",
    "Головні убори",
    "Каремати, сидушки",
    "Спальні мішки"
  ];

  const filteredProducts = selectedCategory
    ? products.filter(p =>
        p.features?.find(f => f.name === "Розділ")?.value === selectedCategory
      )
    : products.slice(0, 6); // первые 6 по умолчанию

  return (
    <div className="space-y-6">
      {/* Категории */}
      <div className="bg-[#6e7f4f] py-4 px-2 shadow-md overflow-x-auto whitespace-nowrap flex gap-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              selectedCategory === category
                ? 'bg-[#7f905f] text-white'
                : 'bg-[#6e7f4f] text-white hover:bg-[#81935d]'
            }`}
          >
            {category}
          </button>
        ))}
        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory('')}
            className="px-4 py-2 bg-[#b0b0b0] text-black rounded-full hover:bg-gray-400"
          >
            Скинути
          </button>
        )}
      </div>

      {/* Баннер 1 с кнопкой */}
      <div className="relative overflow-hidden rounded shadow">
        <img src={banner1} alt="Головний банер" className="w-full h-auto object-cover" />
        <Link
          to="/catalog"
          className="absolute bottom-6 left-6 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 font-bold rounded-full shadow"
        >
          Каталог
        </Link>
      </div>

      {/* Баннер 2 */}
      <div className="overflow-hidden rounded shadow">
        <img src={banner2} alt="Додатковий банер" className="w-full h-auto object-cover" />
      </div>

      {/* Популярні товари */}
      <section>
        <h2 className="text-xl font-bold mb-4">Популярні товари</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
