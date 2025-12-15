import { MdShoppingCart } from "react-icons/md";


export default function Home() {

    return (
        <main className="font-fira text-white">
            <div className="fab">
                <button className="btn btn-xl btn-circle btn-primary border-none text-accent"><MdShoppingCart/></button>
            </div>

            {/* Hero Text */}
            <div className="grid grid-cols-[0.8fr_1fr] md:grid-cols-[0.8fr_1fr] mt-50">
                <span className="text-rotate text-2xl md:text-5xl font-bold font-ice text-accent">
                    <span className="justify-items-end ">
                        <span id="0">Business Card</span>
                        <span id="1">Poster</span>
                        <span id="2">Pet Tag</span>
                        <span id="3">Car Tag</span>
                    </span>
                </span>
                <div className="md:pl-2">
                    <h1 className="text-2xl md:text-5xl text-primary font-bold font-ice justify-self-center md:justify-self-start">
                        BUT MAKE IT SMART
                    </h1>
                    <p className="text-xs md:text-xl text-accent font-light">Things made easier.</p>
                </div>


            </div>

            <section className="min-h-screen" >

            </section>
            <section className="min-h-screen" >

            </section>
            <section className="min-h-screen" >

            </section>
            <section className="min-h-screen" >

            </section>
        </main>
    );
}