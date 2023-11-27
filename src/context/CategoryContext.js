"use client"

import { createContext, useState } from "react";

export const CategoryContext = createContext();

// Provider component that wraps the app and makes category available to any child component that calls it.
export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState("");
    const changeCategory = (cat) => {
        setCategory(cat);
    }

    return (
        <CategoryContext.Provider value={{ category, changeCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}