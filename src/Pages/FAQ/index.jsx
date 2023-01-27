import DesktopFooter from "../Components/DesktopFooter";
import MobileFooter from "../Components/MobileTabletFooter";
import Navbar from "../Components/Navbar";
import RelatedProductCard from "../Components/RelatedProductCard";
import RelatedProductStockOutCard from "../Components/RelatedProductStockOutCard";

function FAQ() {
    return (
        <>
            <div className="font-sans">
                <Navbar/>
                <div className="bg-gray-50">
                    <div className="flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom bg-page-header">
                        <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
                            <div className="w-full flex justify-center flex-col relative">
                                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-serif text-center">
                                    Frequently Asked Questions
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-10 lg:py-12">
                            <div className="grid gap-4 lg:mb-8 items-center md:grid-cols-2 xl:grid-cols-2">
                                <div className="pr-16">
                                    <span
                                        style={{
                                            boxSizing: "border-box",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: 1,
                                            border: 0,
                                            margin: 0,
                                            padding: 0,
                                            position: "relative",
                                            maxWidth: "100%"
                                        }}
                                    >
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                display: "block",
                                                width: "initial",
                                                height: "initial",
                                                background: "none",
                                                opacity: 1,
                                                border: 0,
                                                margin: 0,
                                                padding: 0,
                                                maxWidth: "100%"
                                            }}
                                        >
                                            <img
                                                alt=""
                                                aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27720%27%20height=%27550%27/%3e"
                                                style={{
                                                    display: "block",
                                                    maxWidth: "100%",
                                                    width: "initial",
                                                    height: "initial",
                                                    background: "none",
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0
                                                }}
                                            />
                                        </span>
                                        <img
                                            alt="logo"
                                            srcSet="/faq.svg 1x, /faq.svg 2x"
                                            src="/faq.svg"
                                            decoding="async"
                                            data-nimg="intrinsic"
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                boxSizing: "border-box",
                                                padding: 0,
                                                border: "none",
                                                margin: "auto",
                                                display: "block",
                                                width: 0,
                                                height: 0,
                                                minWidth: "100%",
                                                maxWidth: "100%",
                                                minHeight: "100%",
                                                maxHeight: "100%"
                                            }}
                                        />
                                    </span>
                                </div>
                                <div className="">
                                    <button
                                        className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                        id="headlessui-disclosure-button-272"
                                        type="button"
                                        aria-expanded="false"
                                    >
                                        <span>How does the kachabazar work?</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className=" w-5 h-5 text-gray-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div className="mt-2">
                                        <button
                                            className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none"
                                            id="headlessui-disclosure-button-274"
                                            type="button"
                                            aria-expanded="false"
                                        >
                                            <span>Can I cancel my subscription anytime?</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className=" w-5 h-5 text-gray-500"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <button
                                            className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none"
                                            id="headlessui-disclosure-button-276"
                                            type="button"
                                            aria-expanded="false"
                                        >
                                            <span>Whice payment method you should accept?</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className=" w-5 h-5 text-gray-500"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <button
                                            className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none"
                                            id="headlessui-disclosure-button-278"
                                            type="button"
                                            aria-expanded="false"
                                        >
                                            <span>Can I cancel my subscription anytime?</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className=" w-5 h-5 text-gray-500"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <button
                                            className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none"
                                            id="headlessui-disclosure-button-280"
                                            type="button"
                                            aria-expanded="false"
                                        >
                                            <span>What is kachabazar EC2 auto scaling?</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className=" w-5 h-5 text-gray-500"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <button
                                            className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none"
                                            id="headlessui-disclosure-button-282"
                                            type="button"
                                            aria-expanded="false"
                                        >
                                            <span>What are the benefits of using kachabazar affliate?</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className=" w-5 h-5 text-gray-500"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <button
                                        className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                        id="headlessui-disclosure-button-284"
                                        type="button"
                                        aria-expanded="false"
                                    >
                                        <span>What is a affliates product configuration?</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className=" w-5 h-5 text-gray-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div className="mt-2">
                                        <button
                                            className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none"
                                            id="headlessui-disclosure-button-286"
                                            type="button"
                                            aria-expanded="false"
                                        >
                                            <span>
                                                What is fleet management and how is it different from dynamic
                                                scaling?
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className=" w-5 h-5 text-gray-500"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full" />
                <MobileFooter />
                <DesktopFooter />
            </div>
        </>
    );
}

export default FAQ