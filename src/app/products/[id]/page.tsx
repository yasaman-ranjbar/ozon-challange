"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useProduct } from "@/hooks/useProduct";
import SkeletonLoading from "@/components/product/SkeletonLoading";
import { AppRoutes } from "@/constant/routes";
import Button from "@/components/ui/Button";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { product, loading, error } = useProduct(params.id as string);

  if (loading) {
    return <SkeletonLoading />;
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600 mb-4">{error || "Product not found"}</p>
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="success"
          onClick={() => router.push(AppRoutes.PRODUCTS)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Products
        </Button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="aspect-square relative bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>
                <p className="text-lg text-gray-600 capitalize">
                  {product.category}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-lg text-gray-600">
                    {product.rating.rate}
                  </span>
                  <span className="text-gray-500">
                    ({product.rating.count} reviews)
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-4">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
