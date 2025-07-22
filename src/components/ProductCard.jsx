import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const imageSrc =
    product.pictures?.[0] ||
    "https://m-win.com.ua/content/images/9/1500x1500l80mc0/sumka-napashnyk-z-balistychnym-paketom-1-klasu-m-win-large-lc-multicam-66464319636777.webp";

  const name = product.name || "Без назви";
  const price = product.price ? `${product.price} грн` : "Ціна не вказана";

  return (
    <Link to={`/product/${encodeURIComponent(name)}`}>
      <div className="bg-[#f5f5dc] border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-60 object-contain p-2 bg-white"
          onError={(e) => {
            e.target.src =
              "https://m-win.com.ua/content/images/9/1500x1500l80mc0/sumka-napashnyk-z-balistychnym-paketom-1-klasu-m-win-large-lc-multicam-66464319636777.webp";
          }}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">{name}</h2>
          <p className="mt-2 text-yellow-700 font-bold text-xl">{price}</p>
        </div>
      </div>
    </Link>
  );
}
