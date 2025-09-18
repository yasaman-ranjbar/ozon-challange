# Ozone Mini Product Store

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
- fore **custom hook** for fetching and filtering products

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
│  ├─ page.tsx           # Home page
│  ├─ products/[id]/     # Product page and product detail page
│  └─ layout.tsx
├─ components/
│  ├─ ui                 # UI common components
│  ├─ products           # Products ui components
│  └─ product            # single product component
├─ hooks/                # Custom hooks
├─ types/                # TypeScript types
└─ services/                # api services
└─ store/                # state managment
└─ constants/                # static data
```
