import businessCardImg from '../../assets/img/business-card.png'
import Navbar from "../../components/Navbar.tsx";
import {useEffect, useState} from "react";
import {MdConnectWithoutContact, MdOutlineDone, MdShoppingCart, MdStyle} from "react-icons/md";
import {FaHandshake, FaChartLine, FaUsers, FaHammer, FaWallet, FaShieldAlt} from "react-icons/fa";
import overlay from "../../assets/img/overlays/overlay.svg"
import {FaCheck} from "react-icons/fa6";
import {SiNfc} from "react-icons/si";
import exampleImg from "../../assets/img/businesscard-print.jpg"
import {ProductEnum} from "../../enums/Products.ts";
import {useCartHelpers} from "../../hooks/usecart.tsx";
import {LuLayoutPanelLeft} from "react-icons/lu";
import {TbBackground} from "react-icons/tb";
import {useNavigate} from "react-router-dom";
import PhoneNotification from "../../components/PhoneNotification.tsx";
import CustomizeProduct from "../../components/CustomizeProduct.tsx";
import CustomizeBusinessCardForm from "../../components/products/CustomizeBusinessCardForm.tsx";
import {AiFillAlert, AiFillPicture, AiOutlineEye, AiOutlineLayout} from "react-icons/ai";




const ITEMAVAILABLE = true;
export default function BusinessCard() {
    const [productAvailable, setProductAvailable] = useState(ITEMAVAILABLE);
    const {state, setProductQuantity, clearCart} = useCartHelpers();
    const [animateCartBubble, setAnimateCartBubble] = useState(false);
    const navigate = useNavigate();
    const cartContentTotal = state.items
        .filter(item => item.product === ProductEnum.BusinessCard)
        .reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
        if (cartContentTotal > 0) {
            setAnimateCartBubble(true);
            const t = setTimeout(() => setAnimateCartBubble(false), 150);
            return () => clearTimeout(t);
        }
    }, [cartContentTotal]);

    useEffect(() => {
        console.log(cartContentTotal);
    }, [cartContentTotal, state]);
    const cartIsEmpty = cartContentTotal === 0;

    const updateCart = (e) => {
        const numberToBeUpdatedWith = parseInt(e.target.value);
        setProductQuantity(ProductEnum.BusinessCard, numberToBeUpdatedWith);
    }

    const addToCart = () => {
        setProductQuantity(
            ProductEnum.BusinessCard,
            currentQuantityOfProduct + 1 || 1
        );
    };

    const steps = [
        { title: "Text", icon: <AiFillAlert /> },
        { title: "Layout", icon: <AiOutlineLayout /> },
        { title: "Background", icon: <AiFillPicture /> },
        { title: "Preview", icon: <AiOutlineEye /> },
    ];

    const currentQuantityOfProduct = state.items
        .filter(item => item.product === ProductEnum.BusinessCard)
        .reduce((sum, item) => sum + item.quantity, 0);

    return (
        <main className="bg-secondary text-accent min-h-screen ">

            {/* CART BUBBLE */}
            <div
                className={`fab cursor-pointer transition-transform duration-200 ${animateCartBubble ? "scale-120" : "scale-100"}`}
                onClick={() => navigate('/cart')}>

                <div
                    className="btn btn-xl btn-circle bg-white border-none hover:scale-110 transition-all duration-200 tooltip hover:tooltip-open tooltip-left tooltip-primary text-white font-fira"
                    data-tip="Go to Cart">
                    <button className="relative inline-block">
                        <MdShoppingCart className="text-3xl text-primary cursor-pointer"/>
                        {!cartIsEmpty && (
                            <div
                                className={`bg-white badge badge-sm w-6 h-6 rounded-full badge-outline absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-center transition-transform duration-200 cursor-pointer ${
                                    animateCartBubble ? "scale-115" : "scale-100"
                                }`}
                            >
                                <div
                                    className="bg-secondary w-5 h-5 text-white text-md font-bold font-fira rounded-full flex justify-center items-center cursor-pointer">
                                    {cartContentTotal}
                                </div>
                            </div>
                        )}
                    </button>
                    <div className="tooltip hover:tooltip-open tooltip-left">
                    </div>
                </div>
            </div>

            <Navbar/>

            <div className="pt-30 flex justify-center items-center flex-col">
                <img
                    src={overlay}
                    alt=""
                    className="absolute inset-0 h-210 object-cover pointer-events-none rotate-180 md:h-180"
                />

                <div className="flex justify-center items-center flex-col md:grid md:grid-cols-2 lg:gap-30 lg:px-20">
                    {/* 3D CARD*/}
                    <div className="relative mt-10 w-72 h-44 perspective-1000">

                        <figure className="w-70 rounded-2xl shadow-xl animate-3d-card lg:w-100">
                            <img
                                src={businessCardImg}
                                alt="3D card"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </figure>

                        {/* Optional 8 divs for layers */}
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    {/* HERO TEXT */}
                    <div className="md:flex md:justify-center md:items-center md:flex-col">
                        {/* TITLE */}
                        <div className="mt-35">
                            <div className="justify-self-center">
                                <h1 className="text-4xl md:text-5xl font-lato text-white text-center font-bold">
                                    BUSINESS CARD
                                </h1>
                                <h1 className="text-3xl md:text-4xl font-ice text-primary text-center">
                                    BUT MAKE IT SMART
                                </h1>
                            </div>
                        </div>

                        {/* Icon List */}
                        <div className="grid grid-cols-4 mt-12 my-3 w-80 ">
                            <div className="flex flex-col justify-center items-center">
                                <SiNfc className="text-white h-8 w-8 mb-3 text-center md:w-10 md:h-10"></SiNfc>
                                <h3 className="text-sm font-lato text-gray-200 text-center md:te">NFC <br/> Enabled</h3>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <MdConnectWithoutContact
                                    className="text-white h-10 w-10 mb-3 text-center md:w-10 md:h-10"></MdConnectWithoutContact>
                                <h3 className="text-sm font-lato text-gray-200 text-center md:text-md">Connect <br/> Instantly</h3>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <FaWallet className="text-white h-8 w-8 mb-3 text-center md:w-10 md:h-10"></FaWallet>
                                <h3 className="text-sm font-lato text-gray-200 text-center md:text-md">Fit in <br/> Wallet</h3>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <FaShieldAlt className="text-white h-8 w-8 mb-3 text-center md:w-10 md:h-10"></FaShieldAlt>
                                <h3 className="text-sm font-lato text-gray-200 text-center md:text-md">Durable<br/> Material</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* SHOWCASE */}
            <div className="mt-50 lg:grid lg:grid-cols-[1fr_0.8fr] lg:mt-100">
                <div className="h-75 w-full overflow-hidden fade-bottom">
                    <PhoneNotification playOnce={false} title="ANNA WILSON - REALTOR" description="Business Card Detected - Tap to Connect"></PhoneNotification>
                </div>

                <div className="flex flex-col justify-self-center w-95 p-12 mt-5 lg:pl-0 lg:justify-self-start">
                    <h2 className="text-2xl text-gray-300 font-fira font-bold mb-4">Tap. Share. Connect.</h2>
                    <p className="text-white text-md font-lato">Tap your phone to the business card to <span
                        className="text-primary font-bold">instantly share </span> your online presence, whether that’s
                        all your social profiles in one place, a single account, or a custom URL you choose.
                    </p>
                    <img src={exampleImg} className="hidden" alt="Image"/>
                </div>
            </div>

            {/* STATS */}
            <div className="flex justify-self-center mt-10 font-fira md:mt-40">
                <div className="stats shadow gird grid-rows-[0.2fr_1fr_1fr_1fr_0.2fr] lg:flex rounded-xl p-1 ">

                    <div className="divider divider-primary"></div>

                    <div className="stat">
                        <div className="stat-figure text-white">
                            <FaHandshake className="h-10 w-10"/>
                        </div>
                        <div className="stat-title text-primary font-bold font-fira text-md">Follow-Up Rate</div>
                        <div className="stat-value text-white">93%</div>
                        <div className="stat-desc">Much higher than paper cards (27%)</div>
                    </div>


                    <div className="stat">
                        <div className="stat-figure text-white">
                            <FaChartLine className="h-10 w-10"/>
                        </div>
                        <div className="stat-title text-primary font-bold font-fira text-md">Cost Savings</div>
                        <div className="stat-value text-white">70-80%</div>
                        <div className="stat-desc">Saved on reprints after initial investment</div>
                    </div>


                    <div className="stat">
                        <div className="stat-figure text-white">
                            <FaUsers className="h-10 w-10"/>
                        </div>
                        <div className="stat-title text-primary font-bold font-fira text-md">Professional Preference
                        </div>
                        <div className="stat-value text-white">65%</div>
                        <div className="stat-desc">Prefer digital NFC for interactive networking</div>
                    </div>

                    <div className="divider divider-primary"></div>
                </div>

            </div>

            <div className="mt-25 bg-white">
                <h2 className="font-ice text-3xl text-white text-center mb-5">CUSTOMIZE YOUR OWN</h2>
                <CustomizeBusinessCardForm />
            </div>

            <div className="min-h-screen bg-white">
            </div>

            <div className="text-xs">
                *
                Environmental Stats
                Billions of paper business cards are printed yearly, with 88% tossed within a week, contributing to 17
                trees felled daily for U.S. production alone. One NFC card replaces 500+ paper ones, slashing waste by
                over 99% and cutting CO2 emissions from printing.
                Engagement and Cost Data
                NFC exchanges yield 93% higher follow-up rates versus 27% for paper, as taps deliver instant, updatable
                links via smartphone. Long-term, NFC saves 70-80% on reprint costs after initial outlay, with 65% of
                professionals preferring digital for interactivity
            </div>


        </main>
    )
}