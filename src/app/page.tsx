"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/products');
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Ozon Challenge - Product Store
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Click on any product to view details
        </p>
      </header>
      <Button onClick={handleClick} variant="primary" size="lg">
        products List
      </Button>
    </main>
  );
}
