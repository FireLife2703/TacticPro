import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products_with_categories.json';
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const filtered = products.filter(p => p.category === decodedName);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Категорія: {decodedName}</h1>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">У цій категорії поки що немає товарів.</p>
      )}
    </div>
  );
}
