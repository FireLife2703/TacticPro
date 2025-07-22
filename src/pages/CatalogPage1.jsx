import React, { useState, useMemo } from "react";
import products from "../data/products_with_all_images.json";
import ProductCard from "../components/ProductCard";

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState("Всі");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const categories = useMemo(() => {
    const set = new Set();
    products.forEach(p => {
      const c = p.features?.find(f => f.name === "Розділ")?.value;
      if (c) set.add(c);
    });
    return Array.from(set).sort();
  }, []);

  const brands = useMemo(() => {
    const set = new Set();
    products.forEach(p => {
      const b = p.features?.find(f => f.name === "Бренд")?.value;
      if (b) set.add(b);
    });
    return ["Всі", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    return products
      .filter(p => {
        const name = p.name?.toLowerCase() || "";
        const matchesSearch = name.includes(search.toLowerCase());

        const category = p.features?.find(f => f.name === "Розділ")?.value;
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(category);

        const brand = p.features?.find(f => f.name === "Бренд")?.value;
        const matchesBrand = selectedBrands === "Всі" || brand === selectedBrands;

        return matchesSearch && matchesCategory && matchesBrand;
      })
      .sort((a, b) => {
        const pa = parseFloat(a.price) || 0;
        const pb = parseFloat(b.price) || 0;
        return sortOrder === "asc" ? pa - pb : pb - pa;
      });
  }, [search, selectedCategories, selectedBrands, sortOrder]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="grid grid-cols-[250px_1fr] gap-6">
      <aside className="space-y-6 bg-[#6e7f4f] text-white p-4 rounded shadow">
        <div>
          <h3 className="font-semibold mb-2">Категорії</h3>
          <div className="flex flex-col gap-2">
            {categories.map(cat => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <span className="text-white">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Виробник</h3>
          <select
            value={selectedBrands}
            onChange={e => setSelectedBrands(e.target.value)}
            className="p-2 border rounded w-full text-black"
          >
            {brands.map(b => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </aside>

      <main>
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Пошук по назві..."
            className="p-2 border rounded w-full md:max-w-sm text-black"
          />
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border rounded text-black"
          >
            <option value="asc">Ціна: від низької до високої</option>
            <option value="desc">Ціна: від високої до низької</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
