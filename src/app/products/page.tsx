"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductList } from "@/components/products/ProductList";
import { ChangeEvent, useState, useMemo } from "react";
import TextField from "@/components/ui/TextField";
import SelectBox from "@/components/ui/SelectBox";

export default function Home() {
  const { products, loading, error } = useProducts();
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategory] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryFilter = (e: string) => {
    setCategory(e as string);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by search value
    if (searchValue.trim()) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // Filter by category
    if (categoryValue && categoryValue !== "all categories") {
      filtered = filtered.filter(
        (product) => product.category === categoryValue
      );
    }

    return filtered;
  }, [products, searchValue, categoryValue]);

  const categories = [
    "all categories",
    ...Array.from(new Set(products.map((item) => item.category))),
  ];

  if (error) {
    return (
      <main className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Product Store
          </h1>
        </header>

        <div className="grid grid-cols-2 gap-4">
          <TextField
            placeholder="search"
            value={searchValue}
            onChange={handleSearch}
          />
          <SelectBox
            defaultValue="all categories"
            options={categories}
            value={categoryValue}
            onChange={(e) => handleCategoryFilter(e as string)}
          />
        </div>

        <ProductList products={filteredProducts} loading={loading} />
      </div>
    </main>
  );
}
