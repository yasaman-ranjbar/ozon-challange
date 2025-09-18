"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductList } from "@/components/products/ProductList";
import { ChangeEvent, useEffect, useMemo } from "react";
import TextField from "@/components/ui/TextField";
import SelectBox from "@/components/ui/SelectBox";
import { useQueryParams } from "@/hooks/useQueryParams";
import { sortData } from "@/constant/sortData";
import { useFilterStore } from "@/store/filterStore";
import useFilterProducts from "@/hooks/useFilterProducts";

export default function Home() {
  const { products, loading, error } = useProducts();
  const { setQueryParam, getQueryParam } = useQueryParams();

  // get data from store
  const {
    searchValue,
    categoryValue,
    sortValue,
    setSearchValue,
    setCategoryValue,
    setSortValue,
  } = useFilterStore();

  // Get filtered products
  const filteredProducts = useFilterProducts(products);

  // Initialize values from URL parameters on component mount
  useEffect(() => {
    const searchParam = getQueryParam("search") || "";
    const categoryParam = getQueryParam("category") || "";
    const sortParam = getQueryParam("sort") || "";
    setSearchValue(searchParam);
    setCategoryValue(categoryParam);
    setSortValue(sortParam);
  }, [getQueryParam]);

  // show avarage filter price
  const avarageFilterPrice = useMemo(() => {
    return (
      filteredProducts.reduce((acc, product) => acc + product.price, 0) /
      filteredProducts.length
    );
  }, [filteredProducts]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setQueryParam("search", value);
  };

  const handleCategoryFilter = (e: string) => {
    const value = e === "all categories" ? "" : e;
    setCategoryValue(value);
    setQueryParam("category", value);
  };

  const handleSort = (e: string) => {
    const value = e === "sort" ? "" : e;
    console.log(value);
    setSortValue(value);
    setQueryParam("sort", value);
  };

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
    <div className="space-y-8">
      {filteredProducts.length > 0 && (
        <h2 className="flex justify-center text-xl bg-orange-100 p-4 rounded-md">
          Average Filter Price: {avarageFilterPrice.toFixed(2)}
        </h2>
      )}
      <div className="grid grid-cols-3 gap-4">
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
        <SelectBox
          defaultValue="sort"
          options={sortData}
          value={sortValue}
          onChange={(e) => handleSort(e as string)}
        />
      </div>

      <ProductList products={filteredProducts} loading={loading} />
    </div>
  );
}
