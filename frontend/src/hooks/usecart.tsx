import { useCart } from "../context/CartContext";
import { v4 as uuid } from "uuid";
import type {ProductEnum} from "../enums/Products.ts";

export const useCartHelpers = () => {
    const { state, dispatch } = useCart();

    const addItem = (item: any) => {
        dispatch({type: "ADD_ITEM", payload: item})
        console.log("addItem", item)
    };
    const removeItem = (id: string) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
            console.log("REMOVE_ITEM", id);
    };
    const updateItem = (item: any) => {
        dispatch({type: "UPDATE_ITEM", payload: item})
        console.log("Cart updated, payload:", item)
    };
    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
        console.log("Cart cleared")
    };

    const total = () => {
        return state.items.reduce((acc, item) => {
            let customizationPrice = 0;
            if (item.customization) {
                for (const key in item.customization) {
                    const value = (item.customization as any)[key];
                    if (typeof value === "number") customizationPrice += value;
                }
            }
            return acc + (item.basePrice + customizationPrice) * item.quantity;
        }, 0);
    };


    const setProductQuantity = (product: ProductEnum, quantity: number) => {
        const existingItem = state.items.find(item => item.product === product);

        if (existingItem) {
            updateItem({
                ...existingItem,
                quantity,
            });
            console.log("Updated cart");
        } else {
            addItem({
                id: uuid(),
                product,
                quantity,
                customization: {}, // empty for now
            });
            console.log("Added to cart");
        }
    };

    return { state, addItem, removeItem, updateItem, clearCart, total, setProductQuantity };
};