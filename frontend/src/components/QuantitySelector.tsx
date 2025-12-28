import React from "react";
import { useCartHelpers } from "../hooks/useCart";
import { ProductEnum } from "../enums/Products";

interface QuantitySelectorProps {
    product: ProductEnum;
    maxQuantity?: number; // default max 10
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ product, maxQuantity = 10 }) => {
    const { state, setProductQuantity } = useCartHelpers();

    // get total quantity of this product in cart
    const cartContentTotal = state.items
        .filter(item => item.product === product)
        .reduce((sum, item) => sum + item.quantity, 0);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductQuantity(product, parseInt(e.target.value));
    };

    return (
        <select
            value={cartContentTotal || 0}
            onChange={handleChange}
            className="select bg-primary w-14 rounded-tl-xl rounded-bl-xl border-r-5 border-secondary text-white flex items-center justify-center"
        >
            {Array.from({ length: maxQuantity }, (_, i) => i + 1).map(n => (
                <option key={n} value={n}>{n}</option>
            ))}
        </select>
    );
};

export default QuantitySelector;