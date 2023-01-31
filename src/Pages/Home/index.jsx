import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Cart from "../Components/Cart";
import CategoriesDropDown from "../Components/CategoriesDropDown";
import CategoryCard from "../Components/CategoryCard";
import DesktopFooter from "../Components/DesktopFooter";
import DownloadApp from "../Components/DownloadApp";
import MobileFooter from "../Components/MobileTabletFooter";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import ProductModal from '../Components/ProductModal';

function Home() {

    const navigate = useNavigate();

    const [position, setPosition] = useState(0)
    const [speed, setSpeed] = useState(300)
    useEffect(() => {
        const interval = setInterval(() => {
            if (position == 0) {
                setSpeed(300)
            }
            setPosition(position + 880);
            if (position == 880 * 3) {
                setSpeed(0)
                setPosition(0)
            }
        }, 2000);
        return () => clearInterval(interval);
    })

    return (
        <>
            <div className="font-sans">
                <div className="bg-gray-50">
                    <div className="min-h-screen">
                        <button aria-label="Cart" className="absolute">
                            <div className="right-0 w-35 float-right fixed top-2/4 bottom-2/4 align-middle shadow-lg cursor-pointer z-30 hidden lg:block xl:block">
                                <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-tl-lg p-2 text-gray-700">
                                    <span className="text-2xl mb-1 text-emerald-600">
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
                                                d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                            />
                                            <path
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={32}
                                                d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
                                            />
                                        </svg>
                                    </span>
                                    <span className="px-2 text-sm font-serif font-medium">
                                        0 Items
                                    </span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-emerald-700 p-2 text-white text-base font-serif font-medium rounded-bl-lg mx-auto">
                                    $0.00
                                </div>
                            </div>
                        </button>
                        <div className="bg-white">
                            <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
                                <div className="flex w-full">
                                    <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                                        <div className="overflow-hidden">
                                            <div
                                                className="flex"
                                                style={{
                                                    transform: `translateX(-${position}px)`,
                                                    transitionDuration: `${speed}ms`
                                                }}
                                            >
                                                <div
                                                    className="flex-shrink-0 h-full relative rounded-lg overflow-hidden "
                                                    style={{ width: 850, marginRight: 30 }}
                                                >
                                                    <div className="text-sm text-gray-600 hover:text-emerald-dark">
                                                        <span
                                                            style={{
                                                                boxSizing: "border-box",
                                                                display: "block",
                                                                overflow: "hidden",
                                                                width: "initial",
                                                                height: "initial",
                                                                background: "none",
                                                                opacity: 1,
                                                                border: 0,
                                                                margin: 0,
                                                                padding: 0,
                                                                position: "relative"
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
                                                                    padding: "42.1053% 0px 0px"
                                                                }}
                                                            />
                                                            <img
                                                                alt="Quality Freshness Guaranteed!"
                                                                src="https://cdn.pixabay.com/photo/2023/01/10/09/51/sand-dunes-7709400_960_720.jpg"
                                                                decoding="async"
                                                                data-nimg="responsive"
                                                                className="object-cover"
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
                                                            <noscript />
                                                        </span>
                                                    </div>
                                                    <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                                                        <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                                                            <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                                                                The Best Quality Products Guaranteed!
                                                            </h1>
                                                            <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                                                                Dramatically facilitate effective total linkage for go forward processes...
                                                            </p>
                                                            <a
                                                                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
                                                                href="/search?category=fresh-vegetable"
                                                            >
                                                                Shop Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-shrink-0 h-full relative rounded-lg overflow-hidden "
                                                    style={{ width: 850, marginRight: 30 }}
                                                >
                                                    <div className="text-sm text-gray-600 hover:text-emerald-dark">
                                                        <span
                                                            style={{
                                                                boxSizing: "border-box",
                                                                display: "block",
                                                                overflow: "hidden",
                                                                width: "initial",
                                                                height: "initial",
                                                                background: "none",
                                                                opacity: 1,
                                                                border: 0,
                                                                margin: 0,
                                                                padding: 0,
                                                                position: "relative"
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
                                                                    padding: "42.1053% 0px 0px"
                                                                }}
                                                            />
                                                            <img
                                                                alt="Quality Freshness Guaranteed!"
                                                                src="https://cdn.pixabay.com/photo/2023/01/10/09/51/sand-dunes-7709400_960_720.jpg"
                                                                decoding="async"
                                                                data-nimg="responsive"
                                                                className="object-cover"
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
                                                            <noscript />
                                                        </span>
                                                    </div>
                                                    <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                                                        <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                                                            <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                                                                Best Different Type of Grocery Store
                                                            </h1>
                                                            <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                                                                Quickly aggregate empowered networks after emerging products...
                                                            </p>
                                                            <a
                                                                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
                                                                href="/search?category=fresh-vegetable"
                                                            >
                                                                Shop Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-shrink-0 h-full relative rounded-lg overflow-hidden "
                                                    style={{ width: 850, marginRight: 30 }}
                                                >
                                                    <div className="text-sm text-gray-600 hover:text-emerald-dark">
                                                        <span
                                                            style={{
                                                                boxSizing: "border-box",
                                                                display: "block",
                                                                overflow: "hidden",
                                                                width: "initial",
                                                                height: "initial",
                                                                background: "none",
                                                                opacity: 1,
                                                                border: 0,
                                                                margin: 0,
                                                                padding: 0,
                                                                position: "relative"
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
                                                                    padding: "42.1053% 0px 0px"
                                                                }}
                                                            />
                                                            <img
                                                                alt="Quality Freshness Guaranteed!"
                                                                src="https://cdn.pixabay.com/photo/2023/01/10/09/51/sand-dunes-7709400_960_720.jpg"
                                                                decoding="async"
                                                                data-nimg="responsive"
                                                                className="object-cover"
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
                                                            <noscript />
                                                        </span>
                                                    </div>
                                                    <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                                                        <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                                                            <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                                                                Quality Freshness Guaranteed!
                                                            </h1>
                                                            <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                                                                Intrinsicly fashion performance based products rather than accurate benefits...
                                                            </p>
                                                            <a
                                                                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
                                                                href="/search?category=fresh-vegetable"
                                                            >
                                                                Shop Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-shrink-0 h-full relative rounded-lg overflow-hidden "
                                                    style={{ width: 850, marginRight: 30 }}
                                                >
                                                    <div className="text-sm text-gray-600 hover:text-emerald-dark">
                                                        <span
                                                            style={{
                                                                boxSizing: "border-box",
                                                                display: "block",
                                                                overflow: "hidden",
                                                                width: "initial",
                                                                height: "initial",
                                                                background: "none",
                                                                opacity: 1,
                                                                border: 0,
                                                                margin: 0,
                                                                padding: 0,
                                                                position: "relative"
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
                                                                    padding: "42.1053% 0px 0px"
                                                                }}
                                                            />
                                                            <img
                                                                alt="Quality Freshness Guaranteed!"
                                                                src="https://cdn.pixabay.com/photo/2023/01/10/09/51/sand-dunes-7709400_960_720.jpg"
                                                                decoding="async"
                                                                data-nimg="responsive"
                                                                className="object-cover"
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
                                                            <noscript />
                                                        </span>
                                                    </div>
                                                    <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                                                        <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                                                            <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                                                                The Best Quality Products Guaranteed!
                                                            </h1>
                                                            <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                                                                Dramatically facilitate effective total linkage for go forward processes...
                                                            </p>
                                                            <a
                                                                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
                                                                href="/search?category=fresh-vegetable"
                                                            >
                                                                Shop Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full hidden lg:flex">
                                        <div className="w-full group">
                                            <div className="bg-gray-50 h-full border-2 border-orange-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow">
                                                <div className="bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
                                                    <h3 className="text-base font-serif font-medium ">
                                                        Latest Super Discount Active Coupon Code
                                                    </h3>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
                                                        <div className="tengah py-2 px-3 flex items-center justify-items-start">
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
                                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
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
                                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=256&q=75 2x"
                                                                    />
                                                                    <noscript />
                                                                </span>
                                                            </figure>
                                                            <div className="ml-3">
                                                                <div className="flex items-center font-serif">
                                                                    <h6 className="pl-1 text-base font-medium text-gray-600">
                                                                        <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                                                                            10%
                                                                        </span>{" "}
                                                                        Off
                                                                    </h6>
                                                                    <div className="ml-2">
                                                                        <span className="text-emerald-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-emerald-100">
                                                                            Active
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <h2 className="pl-1 font-serif text-base text-gray-700 leading-6 font-semibold mb-2">
                                                                    October Gift Voucher
                                                                </h2>
                                                                <span className="inline-block mb-2">
                                                                    <div className="flex items-center font-semibold">
                                                                        <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                                            16
                                                                        </span>
                                                                        :
                                                                        <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                                            17
                                                                        </span>
                                                                        :
                                                                        <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                                            41
                                                                        </span>
                                                                        :
                                                                        <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                                            24
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
                                                            <div className="info flex items-center">
                                                                <div className="w-full">
                                                                    <div className="block">
                                                                        <div className="font-serif border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block">
                                                                            <button className="block w-full">
                                                                                <span className="uppercase font-serif font-semibold text-sm leading-7 text-emerald-600">
                                                                                    OCTOBER21{" "}
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-xs leading-4 text-gray-500 mt-2">
                                                                        * This coupon apply when shopping more then{" "}
                                                                        <span className="font-bold"> $500</span>{" "}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
                                                        <div className="tengah py-2 px-3 flex items-center justify-items-start">
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
                                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
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
                                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FwBBYm7j%2Fins4.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FwBBYm7j%2Fins4.jpg&w=256&q=75 2x"
                                                                    />
                                                                    <noscript />
                                                                </span>
                                                            </figure>
                                                            <div className="ml-3">
                                                                <div className="flex items-center font-serif">
                                                                    <h6 className="pl-1 text-base font-medium text-gray-600">
                                                                        <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                                                                            15%
                                                                        </span>{" "}
                                                                        Off
                                                                    </h6>
                                                                    <div className="ml-2">
                                                                        <span className="text-emerald-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-emerald-100">
                                                                            Active
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <h2 className="pl-1 font-serif text-base text-gray-700 leading-6 font-semibold mb-2">
                                                                    Winter Gift Voucher
                                                                </h2>
                                                                <span className="inline-block mb-2">
                                                                    <div className="flex items-center font-semibold">
                                                                        <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                                            44
                                                                        </span>
                                                                        :
                                                                        <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                                            17
                                                                        </span>
                                                                        :
                                                                        <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                                            41
                                                                        </span>
                                                                        :
                                                                        <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                                                            24
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
                                                            <div className="info flex items-center">
                                                                <div className="w-full">
                                                                    <div className="block">
                                                                        <div className="font-serif border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block">
                                                                            <button className="block w-full">
                                                                                <span className="uppercase font-serif font-semibold text-sm leading-7 text-emerald-600">
                                                                                    WINTER21{" "}
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-xs leading-4 text-gray-500 mt-2">
                                                                        * This coupon apply when shopping more then{" "}
                                                                        <span className="font-bold"> $500</span>{" "}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="font-serif text-xl">
                                                <span className="text-emerald-600 font-bold">
                                                    100% Natural Quality
                                                </span>{" "}
                                                Organic Product
                                            </h1>
                                            <p className="text-gray-500">
                                                See Our latest discounted products from here and get a
                                                special
                                                <a className="text-emerald-600 ml-1" href="/#discount">
                                                    discount product
                                                </a>
                                            </p>
                                        </div>
                                        <button
                                            className="text-sm font-serif font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700"
                                            onClick={() => { navigate("/search?Category=organic-food") }}
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 py-10
                            lg:py-16
                        ">
                            <div className="mx-auto max-w-screen-2xl px-3 
                                sm:px-10
                            ">
                                <div className="mb-10 flex justify-center">
                                    <div className="text-center w-full 
                                        lg:w-2/5
                                    ">
                                        <h2 className="text-xl mb-2 font-serif font-semibold
                                            lg:text-2xl
                                        ">
                                            Featured Categories
                                        </h2>
                                        <p className="text-base font-sans text-gray-600 leading-6">
                                            Choose your necessary products from this feature categories.
                                        </p>
                                    </div>
                                </div>
                                <ul className="grid grid-cols-2    
                                    xl:grid-cols-6
                                    lg:grid-cols-6
                                    md:grid-cols-4
                                    sm:grid-cols-3
                                ">
                                    <CategoryCard />
                                </ul>
                            </div>
                        </div>
                        <DownloadApp />
                        <div
                            className="bg-gray-50 py-10 mx-auto max-w-screen-2xl px-3 
                                lg:py-16
                                sm:px-10
                        ">
                            <div className="mb-10 flex justify-center">
                                <div className="text-center w-full 
                                    lg:w-2/5
                                ">
                                    <h2 className="text-xl mb-2 font-serif font-semibold
                                        lg:text-2xl
                                    ">
                                        Latest Discounted Products
                                    </h2>
                                    <p className="text-base font-sans text-gray-600 leading-6">
                                        See Our latest discounted products below. Choose your daily
                                        needs from here and get a special discount with free shipping.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-full">
                                    <div className="grid grid-cols-2 gap-2
                                        2xl:grid-cols-6
                                        xl:grid-cols-5
                                        lg:grid-cols-5 lg:gap-3
                                        md:gap-3
                                        sm:grid-cols-3
                                    ">
                                        <ProductCard />
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
            {/* <ProductModal/> */}
            {/* <Cart /> */}
            
        </>
    );
}

export default Home;