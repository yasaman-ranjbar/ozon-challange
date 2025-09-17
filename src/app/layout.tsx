import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Store",
  description: "Ozon challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-gray-100">
          <div className="container mx-auto px-4 py-8 space-y-6">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 text-center">
                Product Store
              </h1>
            </header>

            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
