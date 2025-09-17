import { Product } from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-4 border border-gray-200"
    >
      <div className="aspect-square relative mb-4 bg-gray-50 rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900 text-sm">{product.title}</h3>

        <p className="text-xs text-gray-600 capitalize">{product.category}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>

          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
