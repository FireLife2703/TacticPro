import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Плитоноски',
    image: 'https://m-win.com.ua/content/images/44/300x300l50nn0/28486792754849.webp',
  },
  {
    title: 'Тактичні ремені',
    image: 'https://m-win.com.ua/content/images/40/300x300l50nn0/83554298636412.webp',
  },
  {
    title: 'Шоломи',
    image: 'https://m-win.com.ua/content/images/22/300x300l50nn0/94736833036585.webp',
  },
  {
    title: 'Сітки',
    image: 'https://m-win.com.ua/content/images/55/300x300l50nn0/99276071198745.webp',
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {categories.map((cat, idx) => (
        <Link
          key={idx}
          to="/"
          className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden text-center"
        >
          <img src={cat.image} alt={cat.title} className="w-full h-40 object-cover" />
          <div className="p-2 font-semibold">{cat.title}</div>
        </Link>
      ))}
    </div>
  );
}
