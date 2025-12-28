import Navbar from "../components/Navbar.tsx";
import {useNavigate} from "react-router-dom";
import carImg from '../assets/img/car.webp'
import businesscardImg from '../assets/img/businesscard-print.jpg'
import dogImg from '../assets/img/20220324_1758111.jpg-scaled.webp'


export default function Products() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main className="">
                <div className="">
                    <h1 className="text-5xl font-ice justify-self-center mt-20 mb-30">Products</h1>
                    {/* Hero Carousel */}
                    <div className="carousel w-full h-dvh">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img
                                src={carImg}
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img
                                src={businesscardImg}
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img
                                src={dogImg}
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    {/*Image here*/}
                </div>
                <div className="grid grid-cols[0.8fr_1fr] max-w-full">
                    <img className="max-w" src={carImg} alt="car"></img>
                </div>

                {/* Cards */}
                <section className="gap-3 flex flex-col items-center justify-center md:m-10  md:grid md:grid-cols-2">
                    <div className="indicator">
                        <span className="indicator-item badge badge-primary">New</span>
                    <div className="card card-md bg-base-200 max-w-70 shadow justify-self-end">
                        <figure className="hover-gallery">
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
                        </figure>
                        <div className="card-body">
                            <h2 className="flex flex-col font-bold text-2xl">
                                Business Card
                                <span className="text-primary">BUT MAKE IT SMART</span>
                            </h2>
                            <p>A business card you can fit in your wallet, if you tap your phone to the card it can display the thing you want.</p>
                            <button className="btn btn-neutral btn-outline" onClick={()=> navigate("/products/businesscard")}>wtf is this</button>
                        </div>
                    </div>
                    </div>

                    <div className="card card-md bg-base-200 max-w-70 shadow">
                        <figure className="hover-gallery">
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
                        </figure>
                        <div className="card-body">
                            <h2 className="flex flex-col font-bold text-2xl">
                                Business Card
                                <span className="text-primary">BUT MAKE IT SMART</span>
                            </h2>
                            <p>A business card you can fit in your wallet, if you tap your phone to the card it can display the thing you want.</p>
                            <button className="btn btn-neutral btn-outline" onClick={()=> navigate("/products/businesscard")}>wtf is this</button>
                        </div>
                    </div>
                    <div className="card card-md bg-base-200 max-w-70 shadow justify-self-end">
                        <figure className="hover-gallery">
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
                            <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
                        </figure>
                        <div className="card-body">
                            <h2 className="flex flex-col font-bold text-2xl">
                               CANVAS
                                <span className="text-primary">BUT MAKE IT SMART</span>
                            </h2>
                            <p>A business card you can fit in your wallet, if you tap your phone to the card it can display the thing you want.</p>
                            <button className="btn btn-neutral btn-outline" onClick={()=> navigate("/products/canvas")}>wtf is this</button>
                        </div>
                    </div>

                </section>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat eum tempore unde. Deserunt, enim, iure ullam rerum facere minus voluptatibus doloribus provident quis ab esse vero ipsa neque nemo.</p>

            </main>
        </>
    )
}