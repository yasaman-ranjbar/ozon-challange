"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductList } from "@/components/products/ProductList";

export default function Home() {
  const { products, loading, error } = useProducts();

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
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
           Product Store
          </h1>
        </header>

        <ProductList products={products} loading={loading} />
      </div>
    </main>
  );
}
