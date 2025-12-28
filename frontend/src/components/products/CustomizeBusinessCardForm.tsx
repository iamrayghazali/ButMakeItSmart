import {useState} from "react";
import CustomizeProduct, {type Step} from "../CustomizeProduct.tsx";

import {
    AiFillAlert,
    AiOutlineLayout,
    AiFillPicture,
    AiOutlineEye,
} from "react-icons/ai";

type BusinessCardFormState = {
    name: string;
    title: string;
    layout: string;
    background: File | null;
};

const STEPS: Step[] = [
    {title: "Text", icon: <AiFillAlert/>},
    {title: "Layout", icon: <AiOutlineLayout/>},
    {title: "Background", icon: <AiFillPicture/>},
    {title: "Preview", icon: <AiOutlineEye/>},
];

export default function CustomizeBusinessCardForm() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState<BusinessCardFormState>({
        name: "",
        title: "",
        layout: "",
        background: null,
    });
    const [addBusinessName, setAddBusinessName] = useState(false);

    const isStepValid = (): boolean => {
        switch (step) {
            case 0:
                return form.name.trim() !== "" && form.title.trim() !== "";
            case 1:
                return form.layout !== "";
            case 2:
                return form.background !== null;
            case 3:
                return true;
            default:
                return false;
        }
    };

    return (
        <CustomizeProduct
            steps={STEPS}
            currentStep={step}
            canGoNext={isStepValid()}
            onNext={() => setStep((s) => s + 1)}
            onBack={() => setStep((s) => s - 1)}
            onAddToCart={() => console.log("ADD TO CART", form)}
        >
            {/* STEP 0 — TEXT */}
            {step === 0 && (
                <>
                    <legend className="fieldset-legend">What is your name?</legend>
                    <input
                        className="input border-1 border-accent rounded-md text-white"
                        placeholder="Your name"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                    <legend className="fieldset-legend">What is your Job title?</legend>
                    <input
                        className="input  border-1 border-accent rounded-md text-white"
                        placeholder="Job title"
                        name="Job title"
                        value={form.title}
                        onChange={(e) => setForm({...form, title: e.target.value})}
                    />

                    <input id="toggle" type="checkbox" name="Business Name" className="iphone-toggle"
                           onChange={() => setAddBusinessName(!addBusinessName)}/>

                    <div
                        className={`
                            transition-all duration-500 ease-in-out ${addBusinessName ? "opacity-100 max-h-40 scale-100" : "opacity-0 max-h-0 scale-95 overflow-hidden"}
                            `} >
                        <legend className="fieldset-legend text-sm font-medium">What is the name of your business?</legend>
                        <input
                            className="input border-1 border-accent rounded-md text-white"
                            placeholder="Business name"
                            value={form.name}
                            onChange={(e) => setForm({...form, name: e.target.value})}
                        />
                    </div>
                </>
            )}

            {/* STEP 1 — LAYOUT */}
            {step === 1 && (
                <label className="flex gap-2 items-center">
                    <input
                        type="radio"
                        name="layout"
                        className="radio"
                        checked={form.layout === "A"}
                        onChange={() => setForm({...form, layout: "A"})}
                    />
                    Layout A
                </label>
            )}

            {/* STEP 2 — BACKGROUND */}
            {step === 2 && (
                <input
                    type="file"
                    className="file-input file-input-bordered"
                    onChange={(e) =>
                        setForm({...form, background: e.target.files?.[0] ?? null})
                    }
                />
            )}

            {/* STEP 3 — PREVIEW */}
            {step === 3 && (
                <div className="p-4 rounded-lg bg-base-200">
                    <p className="font-semibold">{form.name}</p>
                    <p className="text-sm opacity-70">{form.title}</p>
                </div>
            )}
        </CustomizeProduct>
    );
}