import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products_with_all_images.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductPage() {
  const { id } = useParams();
  const decodedName = decodeURIComponent(id).toLowerCase();

  const product = products.find(p =>
    p.name?.toLowerCase().trim() === decodedName.trim()
  );

  if (!product) {
    return <div className="p-4 text-center text-red-600">Товар не знайдено</div>;
  }

  const images = product.pictures || [];

  // Удалим цены и слово "цена" из описания
  const cleanDescription = product.description
    ?.replace(/\d+\s?грн/gi, "")
    ?.replace(/ц[іi]на:?/gi, "");

  // Удалим цены и слово "цена" из характеристик
  const cleanFeatures = product.features?.map(({ name, value }) => ({
    name,
    value: value.replace(/\d+\s?грн/gi, "").replace(/ц[іi]на:?/gi, "")
  }));

  return (
   <div className="max-w-4xl mx-auto p-4 bg-[#f5f5dc] rounded shadow text-black">
      {/* === НАЗВАНИЕ === */}
      <h1 className="text-2xl font-bold mb-2 text-center text-black">
        {product.name || "Без назви"}
      </h1>

      {/* === ЦЕНА (над фото) === */}
      {product.price && (
        <p className="text-lg font-semibold mb-4 text-center text-black">
          {product.price} грн
        </p>
      )}

      {/* === КАРУСЕЛЬ === */}
      {images.length > 0 ? (
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
          {images.map((src, i) => (
            <div key={i}>
              <img
                src={src}
                alt={`Фото ${i + 1}`}
                className="w-full h-[400px] object-contain rounded"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">Немає фото</p>
      )}

      {/* === ОПИСАНИЕ === */}
      {cleanDescription && (
        <>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">Опис:</h2>
          <div
            className="prose max-w-none text-sm text-black"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        </>
      )}

      {/* === ХАРАКТЕРИСТИКИ === */}
      {cleanFeatures?.length > 0 && (
        <>
          <h2 className="text-xl mt-8 mb-2 font-semibold text-black">Характеристики:</h2>
          <table className="w-full text-sm border border-gray-300 text-black">
            <tbody>
              {cleanFeatures.map(({ name, value }, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2 font-medium w-1/3 bg-gray-100">{name}</td>
                  <td className="p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* === ЦЕНА (внизу) === */}
      {product.price && (
        <div className="text-xl font-bold text-center mt-8 text-black">
          {product.price} грн
        </div>
      )}

      {/* === КНОПКА КУПИТИ === */}
      <div className="text-center mt-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded">
          Купити
        </button>
      </div>
    </div>
  );
}
