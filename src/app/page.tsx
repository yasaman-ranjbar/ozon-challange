"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/products');
  }

  return (
    <div className="flex flex-col items-center">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Ozon Challenge
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Click on any product to view details
        </p>
      </header>
      <Button onClick={handleClick} variant="primary" size="lg">
        products List
      </Button>
    </div>
  );
}
