import Navbar from "../components/Navbar.tsx";
import {useContext} from "react";
import {CartProvider} from "../context/CartContext.tsx";
import {useCartHelpers} from "../hooks/usecart.tsx";
import {LuChevronsDownUp, LuChevronsUpDown} from "react-icons/lu";


export default function Cart() {
    const { state, setProductQuantity, clearCart } = useCartHelpers();


    const logCart = () => {
        console.log("Cart contents:", state.items);
    };

    const sendOrder = () => {

    }

    return (
        <>
        <Navbar></Navbar>
            <div className="pt-16 bg-black min-h-screen">
                <button onClick={logCart} className="btn text-green-400 mt-30">
                    Log cart
                </button>
                <button onClick={clearCart} className="btn text-green-400 mt-30">
                    clear cart
                </button>
                <h1 className="p-8 font-fira font-bold text-2xl text-white">Your Cart</h1>
                <div className="grid">
                    <div className="text-white rounded-xl p-5">

                        {/* CARD */}
                        <div className="grid grid-cols-[3fr_0.5fr] grid-rows-2 h-80y p-3 bg-secondary rounded-2xl">
                            <div className="grid grid-cols-[0.8fr_3fr]">
                                <div className="avatar">
                                    <div className="w-15 h-15 rounded">
                                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                    </div>
                                </div>
                                <div className="pl-2">
                                    <h3 className="text-md font-fira">Business Card</h3>
                                    <h3 className="text-lg font-ice font-bold text-primary ">But Make It Smart</h3>
                                </div>
                            </div>
                            {
                                <LuChevronsDownUp className="justify-self-end font-bold text-2xl" />

                            }
                            {/* STEPS */}
                        </div>
                    </div>
                </div>
                <div className=""></div>
                <div className=" absolute bottom-0 left-0 w-full h-20 grid grid-cols-2 bg-white text-neutral-content border-t-2 border-primary">
                    <h2 className="text-center text-xl font-fira">Total <br/><span className="text-center font-bold text-2xl">212 EUR</span></h2>
                    <button disabled={true} className="btn btn-primary text-secondary rounded-2xl text-md font-fira font-bold w-40 flex self-center justify-self-center" onClick={sendOrder}>Finish Order</button>
                </div>
            </div>
        </>
    )
}