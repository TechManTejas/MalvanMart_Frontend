import DesktopFooter from "../Components/DesktopFooter";
import MobileFooter from "../Components/MobileTabletFooter";
import Navbar from "../Components/Navbar";
import RelatedProductCard from "../Components/RelatedProductCard";
import RelatedProductStockOutCard from "../Components/RelatedProductStockOutCard";

function Offer() {
    return (
        <>
            <div className="font-sans">
                <div className="bg-gray-50">
                    <div className="flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom bg-page-header">
                        <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
                            <div className="w-full flex justify-center flex-col relative">
                                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-serif text-center">
                                    Mega Offer
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto max-w-screen-2xl px-4 py-10 lg:py-20 sm:px-10">
                        <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
                            <div className="coupon block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow-sm">
                                <div className="tengah p-6 flex items-center justify-items-start">
                                    <figure>
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
                                                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
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
                                                alt="October Gift Voucher"
                                                srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=256&q=75 2x"
                                                src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=256&q=75"
                                                decoding="async"
                                                data-nimg="intrinsic"
                                                className="rounded-lg"
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
                                    </figure>
                                    <div className="ml-5">
                                        <span className="inline-block mb-2">
                                            <div className="flex items-center font-semibold">
                                                <span className="flex items-center justify-center bg-emerald-100  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    4
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-emerald-100  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    1
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-emerald-100  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    3
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-emerald-100  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    35
                                                </span>
                                            </div>
                                        </span>
                                        <h2 className="font-serif text-lg leading-6 font-medium mb-3">
                                            October Gift Voucher
                                        </h2>
                                        <p className="font-serif font-bold text-xl text-gray-600">
                                            <span className="text-lg md:text-xl lg:text-2xl leading-12 text-red-500 font-extrabold">
                                                10%
                                            </span>{" "}
                                            Off
                                        </p>
                                    </div>
                                </div>
                                <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-6">
                                    <div className="info flex lg:my-6 md:my-5 mb-6 items-center">
                                        <div className="w-full">
                                            <div className="block">
                                                <div className="font-serif font-medium flex items-center mb-1">
                                                    <span>Coupon</span>
                                                    <div className="ml-2">
                                                        <span className="text-emerald-600 inline-block">
                                                            Active
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="font-serif border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block">
                                                    <button className="block w-full">
                                                        <span className="uppercase font-serif font-semibold text-base leading-7 text-emerald-600">
                                                            OCTOBER21{" "}
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-500 mt-2">
                                                * This coupon code will apply on{" "}
                                                <span className="font-bold text-gray-700">
                                                    Grocery type products
                                                </span>{" "}
                                                and when you shopping more then{" "}
                                                <span className="font-bold text-gray-700">$500</span>{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="coupon block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow-sm">
                                <div className="tengah p-6 flex items-center justify-items-start">
                                    <figure>
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
                                                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
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
                                                alt="Winter Gift Voucher"
                                                srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FwBBYm7j%2Fins4.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FwBBYm7j%2Fins4.jpg&w=256&q=75 2x"
                                                src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FwBBYm7j%2Fins4.jpg&w=256&q=75"
                                                decoding="async"
                                                data-nimg="intrinsic"
                                                className="rounded-lg"
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
                                    </figure>
                                    <div className="ml-5">
                                        <span className="inline-block mb-2">
                                            <div className="flex items-center font-semibold">
                                                <span className="flex items-center justify-center bg-emerald-100  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    32
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-emerald-100  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    1
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-emerald-100  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    3
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-emerald-100  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    35
                                                </span>
                                            </div>
                                        </span>
                                        <h2 className="font-serif text-lg leading-6 font-medium mb-3">
                                            Winter Gift Voucher
                                        </h2>
                                        <p className="font-serif font-bold text-xl text-gray-600">
                                            <span className="text-lg md:text-xl lg:text-2xl leading-12 text-red-500 font-extrabold">
                                                15%
                                            </span>{" "}
                                            Off
                                        </p>
                                    </div>
                                </div>
                                <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-6">
                                    <div className="info flex lg:my-6 md:my-5 mb-6 items-center">
                                        <div className="w-full">
                                            <div className="block">
                                                <div className="font-serif font-medium flex items-center mb-1">
                                                    <span>Coupon</span>
                                                    <div className="ml-2">
                                                        <span className="text-emerald-600 inline-block">
                                                            Active
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="font-serif border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block">
                                                    <button className="block w-full">
                                                        <span className="uppercase font-serif font-semibold text-base leading-7 text-emerald-600">
                                                            WINTER21{" "}
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-500 mt-2">
                                                * This coupon code will apply on{" "}
                                                <span className="font-bold text-gray-700">
                                                    Grocery type products
                                                </span>{" "}
                                                and when you shopping more then{" "}
                                                <span className="font-bold text-gray-700">$500</span>{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="coupon block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow-sm">
                                <div className="tengah p-6 flex items-center justify-items-start">
                                    <figure>
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
                                                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
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
                                                alt="Summer Gift Voucher"
                                                srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F4thS4Z1%2Fins2.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2F4thS4Z1%2Fins2.jpg&w=256&q=75 2x"
                                                src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F4thS4Z1%2Fins2.jpg&w=256&q=75"
                                                decoding="async"
                                                data-nimg="intrinsic"
                                                className="rounded-lg"
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
                                    </figure>
                                    <div className="ml-5">
                                        <span className="inline-block mb-2">
                                            <div className="flex items-center font-semibold">
                                                <span className="flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    00
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    00
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    00
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    00
                                                </span>
                                            </div>
                                        </span>
                                        <h2 className="font-serif text-lg leading-6 font-medium mb-3">
                                            Summer Gift Voucher
                                        </h2>
                                        <p className="font-serif font-bold text-xl text-gray-600">
                                            <span className="text-lg md:text-xl lg:text-2xl leading-12 text-red-500 font-extrabold">
                                                12%
                                            </span>{" "}
                                            Off
                                        </p>
                                    </div>
                                </div>
                                <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-6">
                                    <div className="info flex lg:my-6 md:my-5 mb-6 items-center">
                                        <div className="w-full">
                                            <div className="block">
                                                <div className="font-serif font-medium flex items-center mb-1">
                                                    <span>Coupon</span>
                                                    <div className="ml-2">
                                                        <span className="text-red-600 inline-block">
                                                            Inactive
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="font-serif border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block">
                                                    <button className="block w-full">
                                                        <span className="uppercase font-serif font-semibold text-base leading-7 text-emerald-600">
                                                            SUMMER21{" "}
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-500 mt-2">
                                                * This coupon code will apply on{" "}
                                                <span className="font-bold text-gray-700">
                                                    Cloths type products
                                                </span>{" "}
                                                and when you shopping more then{" "}
                                                <span className="font-bold text-gray-700">$600</span>{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="coupon block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow-sm">
                                <div className="tengah p-6 flex items-center justify-items-start">
                                    <figure>
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
                                                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
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
                                                alt="August Gift Voucher"
                                                srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FPDLPDHc%2Fins1.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FPDLPDHc%2Fins1.jpg&w=256&q=75 2x"
                                                src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FPDLPDHc%2Fins1.jpg&w=256&q=75"
                                                decoding="async"
                                                data-nimg="intrinsic"
                                                className="rounded-lg"
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
                                    </figure>
                                    <div className="ml-5">
                                        <span className="inline-block mb-2">
                                            <div className="flex items-center font-semibold">
                                                <span className="flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    00
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    00
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    00
                                                </span>
                                                :
                                                <span className="flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                    00
                                                </span>
                                            </div>
                                        </span>
                                        <h2 className="font-serif text-lg leading-6 font-medium mb-3">
                                            August Gift Voucher
                                        </h2>
                                        <p className="font-serif font-bold text-xl text-gray-600">
                                            <span className="text-lg md:text-xl lg:text-2xl leading-12 text-red-500 font-extrabold">
                                                20%
                                            </span>{" "}
                                            Off
                                        </p>
                                    </div>
                                </div>
                                <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-6">
                                    <div className="info flex lg:my-6 md:my-5 mb-6 items-center">
                                        <div className="w-full">
                                            <div className="block">
                                                <div className="font-serif font-medium flex items-center mb-1">
                                                    <span>Coupon</span>
                                                    <div className="ml-2">
                                                        <span className="text-red-600 inline-block">
                                                            Inactive
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="font-serif border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block">
                                                    <button className="block w-full">
                                                        <span className="uppercase font-serif font-semibold text-base leading-7 text-emerald-600">
                                                            AUGUST21{" "}
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-500 mt-2">
                                                * This coupon code will apply on{" "}
                                                <span className="font-bold text-gray-700">
                                                    Grocery type products
                                                </span>{" "}
                                                and when you shopping more then{" "}
                                                <span className="font-bold text-gray-700">$1000</span>{" "}
                                            </p>
                                        </div>
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

export default Offer