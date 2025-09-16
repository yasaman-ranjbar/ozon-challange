const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://fakestoreapi.com";

export const API = {
 products: {
    getAll: `${BASE_URL}/products`,
    byId: (id: number | string) => `${BASE_URL}/products/${id}`
 }
}