import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import "./index.css";
import Products from "./pages/Products";
import BusinessCard from "./pages/products/BusinessCard.tsx";
import {CartProvider} from "./context/CartContext.tsx";
import Cart from "./pages/Cart.tsx";
import Canvas from "./pages/products/Canvas.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products", element: <Products/>},
    { path: "/cart", element: <Cart/>},
    { path: "/products/businesscard", element: <BusinessCard/>},
    { path: "/products/canvas", element: <Canvas/>},
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
);