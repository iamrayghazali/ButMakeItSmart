import type {ReactNode} from "react";

export type Step = {
    title: string;
    icon?: ReactNode;
};

type CustomizeProductProps = {
    steps: Step[];
    currentStep: number;
    canGoNext: boolean;
    onNext: () => void;
    onBack: () => void;
    onAddToCart: () => void;
    children: ReactNode;
};

export default function CustomizeProduct({
                                             steps,
                                             currentStep,
                                             canGoNext,
                                             onNext,
                                             onBack,
                                             onAddToCart,
                                             children,
                                         }: CustomizeProductProps) {

    const progress = ((currentStep + 1) / steps.length) * 100;

    return (
        <div className="max-w-xl mx-auto p-6 pt-0 rounded-xl bg-green-3 font-lato">

            {/* Tabs */}
            <div className="tabs tabs-border mt-4 ">
                {steps.map((step, i) => (
                    <button
                        key={i}
                        className={`tab ${i === currentStep ? "tab-active text-white" : ""}`}
                    >
                        {step.icon && <span className="mr-2">{step.icon}</span>}
                        {step.title}
                    </button>
                ))}
            </div>
            {/* Progress bar */}
            <progress
                className="progress progress-primary w-full rounded-lg h-[2px]"
                value={progress}
                max={100}
            />

            {/* Step content */}
            <div className="min-h-[300px] mt-6 flex flex-col gap-4 ">{children}</div>

            {/* Actions */}
            <div className="flex justify-between mt-6">
                <button
                    className={`btn btn-ghost ${currentStep === 0 ? "opacity-0": "text-white"}`}
                    disabled={currentStep === 0}
                    onClick={onBack}
                >
                    Back
                </button>

                {currentStep < steps.length - 1 ? (
                    <button
                        className={`btn ${canGoNext ? "btn-primary text-white hover:cursor-pointer" : "bg-green-2 text-gray-600 disabled:cursor-not-allowed "}  rounded-xl min-w-20 border-none `}
                        disabled={!canGoNext}
                        onClick={onNext}
                    >
                        Next
                    </button>
                ) : (
                    <button
                        className="btn btn-success"
                        disabled={!canGoNext}
                        onClick={onAddToCart}
                    >
                        Add to cart
                    </button>
                )}
            </div>
        </div>
    );
}