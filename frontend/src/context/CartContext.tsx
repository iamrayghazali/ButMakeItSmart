import React, { createContext, useReducer, useContext, useEffect } from "react";
import type {CartItem} from "../types/CartItem";
import {BusinessCardColor, BusinessCardLayout, ProductBasePrice} from "../enums/BusinessCardEnums.ts";

type State = {
    items: CartItem[];
};

type Action =
    | { type: "ADD_ITEM"; payload: CartItem }
    | { type: "REMOVE_ITEM"; payload: string } // id
    | { type: "UPDATE_ITEM"; payload: CartItem } // same id, update customization or qty
    | { type: "CLEAR_CART" };

const CartContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({ state: { items: [] }, dispatch: () => null });

const initialState: State = {
    items: JSON.parse(localStorage.getItem("cart") || "[]"),
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "ADD_ITEM":
            return { items: [...state.items, action.payload] };
        case "REMOVE_ITEM":
            return { items: state.items.filter(item => item.id !== action.payload) };
        case "UPDATE_ITEM":
            return {
                items: state.items.map(item =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        case "CLEAR_CART":
            return { items: [] };
        default:
            return state;
    }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // persist to localStorage on every change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.items));
    }, [state.items]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

// Helper functions
export const getProductCount = (items: CartItem[], productId: string) => {
    return items.filter(item => item.product === productId).reduce((sum, i) => sum + i.quantity, 0);
};

const calculateTotal = (items: CartItem[]) => {
    return items.reduce((total, item) => {
        let customizationPrice = 0;

        if (item.customization) {
            if (item.customization.color) {
                customizationPrice += BusinessCardColor[item.customization.color as keyof typeof BusinessCardColor];
            }
            if (item.customization.layout) {
                customizationPrice += BusinessCardLayout[item.customization.layout as keyof typeof BusinessCardLayout];
            }
            // add other enums similarly
        }

        const basePrice = ProductBasePrice[item.product];
        return total + (basePrice + customizationPrice) * item.quantity;
    }, 0);
};