import { create } from "zustand";

export interface FilterState{
    searchValue: string;
    categoryValue: string;
    sortValue: string;

    // actions
    setSearchValue: (value: string) => void;
    setCategoryValue: (value: string) => void;
    setSortValue: (value: string) => void;
}


export const useFilterStore = create<FilterState>((set) => ({
    searchValue: "",
    categoryValue: "",
    sortValue: "",

    setSearchValue: (value: string) => set({ searchValue: value }),
    setCategoryValue: (value: string) => set({ categoryValue: value }),
    setSortValue: (value: string) => set({ sortValue: value }),
}))