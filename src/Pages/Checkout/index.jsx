import DesktopFooter from "../Components/DesktopFooter";
import MobileFooter from "../Components/MobileTabletFooter";
import Navbar from "../Components/Navbar";
import RelatedProductCard from "../Components/RelatedProductCard";
import RelatedProductStockOutCard from "../Components/RelatedProductStockOutCard";

function Checkout() {
    return (
        <>
            <div className="font-sans">
                <Navbar />
                <div className="bg-gray-50">
                    <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                        <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
                            <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form>
                                        <div className="form-group">
                                            <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                                01. Personal Details
                                            </h2>
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                        First Name
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            name="firstName"
                                                            type="text"
                                                            placeholder="John"
                                                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                        Last name
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            name="lastName"
                                                            type="text"
                                                            placeholder="Doe"
                                                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                        Email address
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            placeholder="youremail@gmail.com"
                                                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                        Phone number
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            name="contact"
                                                            type="tel"
                                                            placeholder="+062-6532956"
                                                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-12">
                                            <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                                02. Shipping Details
                                            </h2>
                                            <div className="grid grid-cols-6 gap-6 mb-8">
                                                <div className="col-span-6">
                                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                        Street address
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            name="address"
                                                            type="text"
                                                            placeholder="123 Boulevard Rd, Beverley Hills"
                                                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                        City
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            name="city"
                                                            type="text"
                                                            placeholder="Los Angeles"
                                                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                        Country
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            name="country"
                                                            type="text"
                                                            placeholder="United States"
                                                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                        ZIP / Postal
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            name="zipCode"
                                                            type="text"
                                                            placeholder={2345}
                                                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                Shipping Cost
                                            </label>
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <div>
                                                        <div className="p-3 card border border-gray-200 bg-white rounded-md">
                                                            <label className="cursor-pointer label">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <span className="text-2xl mr-3 text-gray-400">
                                                                            <svg
                                                                                stroke="currentColor"
                                                                                fill="none"
                                                                                strokeWidth={2}
                                                                                viewBox="0 0 24 24"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                height="1em"
                                                                                width="1em"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <rect x={1} y={3} width={15} height={13} />
                                                                                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                                                                                <circle cx="5.5" cy="18.5" r="2.5" />
                                                                                <circle cx="18.5" cy="18.5" r="2.5" />
                                                                            </svg>
                                                                        </span>
                                                                        <div>
                                                                            <h6 className="font-serif font-medium text-sm text-gray-600">
                                                                                FedEx
                                                                            </h6>
                                                                            <p className="text-xs text-gray-500 font-medium">
                                                                                Delivery: Today{" "}
                                                                                <span className="font-medium text-gray-600">
                                                                                    Cost : $60.00
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <input
                                                                        name="shippingOption"
                                                                        type="radio"
                                                                        className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                                        defaultValue="FedEx"
                                                                    />
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <div>
                                                        <div className="p-3 card border border-gray-200 bg-white rounded-md">
                                                            <label className="cursor-pointer label">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <span className="text-2xl mr-3 text-gray-400">
                                                                            <svg
                                                                                stroke="currentColor"
                                                                                fill="none"
                                                                                strokeWidth={2}
                                                                                viewBox="0 0 24 24"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                height="1em"
                                                                                width="1em"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <rect x={1} y={3} width={15} height={13} />
                                                                                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                                                                                <circle cx="5.5" cy="18.5" r="2.5" />
                                                                                <circle cx="18.5" cy="18.5" r="2.5" />
                                                                            </svg>
                                                                        </span>
                                                                        <div>
                                                                            <h6 className="font-serif font-medium text-sm text-gray-600">
                                                                                UPS
                                                                            </h6>
                                                                            <p className="text-xs text-gray-500 font-medium">
                                                                                Delivery: 7 Days{" "}
                                                                                <span className="font-medium text-gray-600">
                                                                                    Cost : $20.00
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <input
                                                                        name="shippingOption"
                                                                        type="radio"
                                                                        className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                                        defaultValue="UPS"
                                                                    />
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-12">
                                            <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                                03. Payment Details
                                            </h2>
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <div className="px-3 py-4 card border border-gray-200 bg-white rounded-md">
                                                        <label className="cursor-pointer label">
                                                            <div className="flex item-center justify-between">
                                                                <div className="flex items-center">
                                                                    <span className="text-xl mr-3 text-gray-400">
                                                                        <svg
                                                                            stroke="currentColor"
                                                                            fill="currentColor"
                                                                            strokeWidth={0}
                                                                            viewBox="0 0 512 512"
                                                                            height="1em"
                                                                            width="1em"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M47.5 104H432V51.52a16 16 0 00-19.14-15.69l-368 60.48a16 16 0 00-12 10.47A39.69 39.69 0 0147.5 104zm416 24h-416a16 16 0 00-16 16v288a16 16 0 0016 16h416a16 16 0 0016-16V144a16 16 0 00-16-16zM368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
                                                                            <path d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236z" />
                                                                        </svg>
                                                                    </span>
                                                                    <h6 className="font-serif font-medium text-sm text-gray-600">
                                                                        Cash On Delivery
                                                                    </h6>
                                                                </div>
                                                                <input
                                                                    name="paymentMethod"
                                                                    type="radio"
                                                                    className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                                    defaultValue="COD"
                                                                />
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <div className="px-3 py-4 card border border-gray-200 bg-white rounded-md">
                                                        <label className="cursor-pointer label">
                                                            <div className="flex item-center justify-between">
                                                                <div className="flex items-center">
                                                                    <span className="text-xl mr-3 text-gray-400">
                                                                        <svg
                                                                            stroke="currentColor"
                                                                            fill="currentColor"
                                                                            strokeWidth={0}
                                                                            version="1.1"
                                                                            viewBox="0 0 16 16"
                                                                            height="1em"
                                                                            width="1em"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v9c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-9c0-0.825-0.675-1.5-1.5-1.5zM1.5 3h13c0.271 0 0.5 0.229 0.5 0.5v1.5h-14v-1.5c0-0.271 0.229-0.5 0.5-0.5zM14.5 13h-13c-0.271 0-0.5-0.229-0.5-0.5v-4.5h14v4.5c0 0.271-0.229 0.5-0.5 0.5zM2 10h1v2h-1zM4 10h1v2h-1zM6 10h1v2h-1z" />
                                                                        </svg>
                                                                    </span>
                                                                    <h6 className="font-serif font-medium text-sm text-gray-600">
                                                                        Credit Card
                                                                    </h6>
                                                                </div>
                                                                <input
                                                                    name="paymentMethod"
                                                                    type="radio"
                                                                    className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                                    defaultValue="Card"
                                                                />
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                                            <div className="col-span-6 sm:col-span-3">
                                                <a
                                                    className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full"
                                                    href="/"
                                                >
                                                    <span className="text-xl mr-2">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 512 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={32}
                                                                d="M112 160l-64 64 64 64"
                                                            />
                                                            <path
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={32}
                                                                d="M64 224h294c58.76 0 106 49.33 106 108v20"
                                                            />
                                                        </svg>
                                                    </span>
                                                    Continue Shopping
                                                </a>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <button
                                                    type="submit"
                                                    className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                                                >
                                                    <span className="flex justify-center text-center">
                                                        {" "}
                                                        Confirm
                                                        <span className="text-xl ml-2">
                                                            {" "}
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fill="none"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={48}
                                                                    d="M268 112l144 144-144 144m124-144H100"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
                                <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
                                    <h2 className="font-semibold font-serif text-lg pb-4">
                                        Order Summary
                                    </h2>
                                    <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block">
                                        <div className="group w-full h-auto flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0">
                                            <div className="relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4">
                                                <img
                                                    src="https://i.postimg.cc/63Mm1Pw8/Fresh-Wild-King-Salmon-Steak-1lb.jpg"
                                                    width={40}
                                                    height={40}
                                                    alt="Wild King Salmon Steak"
                                                />
                                            </div>
                                            <div className="flex flex-col w-full overflow-hidden">
                                                <a
                                                    className="truncate text-sm font-medium text-gray-700 text-heading line-clamp-1"
                                                    href="/product/wild-king-salmon-steak"
                                                >
                                                    Wild King Salmon Steak
                                                </a>
                                                <span className="text-xs text-gray-400 mb-1">
                                                    Item Price $12
                                                </span>
                                                <div className="flex items-center justify-between">
                                                    <div className="font-bold text-sm md:text-base text-heading leading-5">
                                                        <span>$12.00</span>
                                                    </div>
                                                    <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
                                                        <button>
                                                            <span className="text-dark text-base">
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    strokeWidth={2}
                                                                    viewBox="0 0 24 24"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                        <p className="text-sm font-semibold text-dark px-1">1</p>
                                                        <button>
                                                            <span className="text-dark text-base">
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    strokeWidth={2}
                                                                    viewBox="0 0 24 24"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <line x1={12} y1={5} x2={12} y2={19} />
                                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <button className="hover:text-red-600 text-red-400 text-lg cursor-pointer">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeWidth={2}
                                                            viewBox="0 0 24 24"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <polyline points="3 6 5 6 21 6" />
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                                        <form className="w-full">
                                            <div className="flex flex-col sm:flex-row items-start justify-end">
                                                <input
                                                    type="text"
                                                    placeholder="Input your coupon code"
                                                    className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-emerald-500 placeholder-gray-500 placeholder-opacity-75"
                                                />
                                                <button className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-emerald-500 h-12 text-sm lg:text-base w-full sm:w-auto">
                                                    Apply
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                                        Subtotal
                                        <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                                            $12.00
                                        </span>
                                    </div>
                                    <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                                        Shipping Cost
                                        <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                                            $0.00
                                        </span>
                                    </div>
                                    <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                                        Discount
                                        <span className="ml-auto flex-shrink-0 font-bold text-orange-400">
                                            $0.00
                                        </span>
                                    </div>
                                    <div className="border-t mt-4">
                                        <div className="flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase">
                                            Total cost
                                            <span className="font-serif font-extrabold text-lg">
                                                {" "}
                                                $12.00
                                            </span>
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

export default Checkout