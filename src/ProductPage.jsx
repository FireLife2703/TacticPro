import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import products from "../data/products_with_all_images.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductPage() {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const decodedName = decodeURIComponent(id).toLowerCase();

  const product = products.find(
    (p) => p.name?.toLowerCase() === decodedName
  );

  useEffect(() => {
    if (!product) return;

    const basePath = `/Foto ptoduct/${product.name}`;
    const localImages = Array.from({ length: 10 }, (_, i) => `${basePath}/${i + 1}.webp`);

    const checkImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => resolve(null);
      });

    Promise.all(localImages.map(checkImage)).then((results) => {
      const valid = results.filter(Boolean);
      setImages(valid.length > 0 ? valid : product.pictures || []);
    });
  }, [product]);

  if (!product) {
    return <div className="p-4 text-white">Товар не знайдено</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white text-black rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

      {/* Карусель фото */}
      {images.length > 0 ? (
        <Slider {...sliderSettings}>
          {images.map((src, idx) => (
            <div key={idx}>
              <img
                src={src}
                alt={`Фото ${idx + 1}`}
                className="w-full h-[400px] object-contain"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-gray-600">Немає фото</p>
      )}

      {/* Описание */}
      {product.description && (
        <div
          className="mt-6 text-sm"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      )}

      {/* Характеристики */}
      {product.params && Object.keys(product.params).length > 0 && (
        <>
          <h2 className="text-xl mt-8 mb-2 font-semibold">Характеристики:</h2>
          <table className="w-full text-sm border border-gray-300">
            <tbody>
              {Object.entries(product.params).map(([key, value]) => (
                <tr key={key} className="border-t">
                  <td className="p-2 font-medium w-1/3 bg-gray-100">{key}</td>
                  <td className="p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
