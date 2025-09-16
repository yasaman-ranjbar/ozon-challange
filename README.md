# Ozone Mini Product Dashboard

This project was built as part of the **Frontend Developer** interview assignment.  
It is implemented using **Next.js (App Router)**, **TypeScript**, **TailwindCSS**, and **Zustand**.

---

## 🚀 Features
- Fetch and display products from [Fake Store API](https://fakestoreapi.com)
- Show product name, price, category, and rating
- Search products by name
- Filter products by category
- Sort products by price (ascending/descending)
- Display the **average price** of currently filtered products
- Product detail page (`/products/[id]`)
- Clean project structure with TypeScript everywhere
- State management with **Zustand**
- One **custom hook** for fetching and filtering products

---

## 📦 Installation

Clone the repository:
```bash
git clone https://github.com/yasaman-ranjbar/ozon-challange
cd ozon-challange

npm install

Create a .env.local file in the root directory and add the following:
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com

npm run dev

src/
├─ app/
│  ├─ page.tsx           # Dashboard
│  ├─ products/[id]/     # Product detail page
│  └─ layout.tsx         # Root layout
├─ components/           # UI components
├─ hooks/                # Custom hooks
├─ stores/               # Zustand store
├─ lib/                  # API endpoints + axios instance
├─ types/                # TypeScript types
└─ utils/                # Utility functions