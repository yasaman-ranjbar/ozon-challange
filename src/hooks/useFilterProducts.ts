import { useFilterStore } from "@/store/filterStore";
import { Product } from "@/types/product";
import { useMemo } from "react";

const useFilterProducts = (products: Product[]) => {
  const { searchValue, categoryValue, sortValue } = useFilterStore();

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

    // Sort by price
    if (sortValue && sortValue !== "sort") {
      filtered = filtered.sort((a, b) => {
        if (sortValue === "Ascending") {
          return a.price - b.price;
        } else if (sortValue === "Descending") {
          return b.price - a.price;
        }
        return 0;
      });
    }

    return filtered;
  }, [products, searchValue, categoryValue, sortValue]);

  return filteredProducts;
};

export default useFilterProducts;
