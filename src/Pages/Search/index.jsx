import DesktopFooter from "../Components/DesktopFooter";
import MobileFooter from "../Components/MobileTabletFooter";
import Navbar from "../Components/Navbar";
import RelatedProductCard from "../Components/RelatedProductCard";
import RelatedProductStockOutCard from "../Components/RelatedProductStockOutCard";

function Search() {
    return (
        <>
            <div className="font-sans">
                <Navbar/>
                <div className="bg-gray-50">
                    <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                        <div className="flex py-10 lg:py-12">
                            <div className="flex w-full">
                                <div className="w-full">
                                    <div className="w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
                                        <div className="mx-auto w-full relative rounded-lg overflow-hidden transition ease-out duration-400 delay-150 transform hover:shadow-xl">
                                            <a className="block" href="/search?category=fresh-vegetable">
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
                                                            padding: "42.5455% 0px 0px"
                                                        }}
                                                    />
                                                    <img
                                                        alt="Taste of"
                                                        sizes="100vw"
                                                        srcSet="/_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=640&q=75 640w, /_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=750&q=75 750w, /_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=828&q=75 828w, /_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=3840&q=75 3840w"
                                                        src="/_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=3840&q=75"
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
                                                </span>
                                                <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full text-center justify-center">
                                                    <div className="pt-4">
                                                        <h2 className="font-serif text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100">
                                                            Taste of <br />
                                                            <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                                                                Fresh &amp; Natural
                                                            </span>
                                                        </h2>
                                                        <p className="text-sm font-sans text-gray-50">
                                                            Weekend discount offer
                                                        </p>
                                                        <button className="hidden sm:block lg:block text-xs mx-auto leading-6 font-serif font-medium mt-4 px-4 py-1 bg-green-500 text-center rounded-full text-white hover:bg-emerald-600">
                                                            Shop Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mx-auto w-full relative rounded-lg overflow-hidden transition ease-out duration-400 delay-150 transform hover:shadow-xl">
                                            <a className="block" href="/search?Category=fish--meat">
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
                                                            padding: "42.5455% 0px 0px"
                                                        }}
                                                    />
                                                    <img
                                                        alt="Taste of"
                                                        sizes="100vw"
                                                        srcSet="/_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=640&q=75 640w, /_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=750&q=75 750w, /_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=828&q=75 828w, /_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=3840&q=75 3840w"
                                                        src="/_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=3840&q=75"
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
                                                </span>
                                                <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full text-center justify-center">
                                                    <div className="pt-4">
                                                        <h2 className="font-serif text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100">
                                                            Taste of <br />
                                                            <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                                                                Fish &amp; Meat
                                                            </span>
                                                        </h2>
                                                        <p className="text-sm font-sans text-gray-50">
                                                            Weekend discount offer
                                                        </p>
                                                        <button className="hidden sm:block lg:block text-xs mx-auto leading-6 font-serif font-medium mt-4 px-4 py-1 bg-green-500 text-center rounded-full text-white hover:bg-emerald-600">
                                                            Shop Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mx-auto w-full relative rounded-lg overflow-hidden transition ease-out duration-400 delay-150 transform hover:shadow-xl">
                                            <a className="block" href="/search?Category=biscuits--cakes">
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
                                                            padding: "42.5455% 0px 0px"
                                                        }}
                                                    />
                                                    <img
                                                        alt="Taste of"
                                                        sizes="100vw"
                                                        srcSet="/_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=640&q=75 640w, /_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=750&q=75 750w, /_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=828&q=75 828w, /_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=3840&q=75 3840w"
                                                        src="/_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=3840&q=75"
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
                                                </span>
                                                <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full text-center justify-center">
                                                    <div className="pt-4">
                                                        <h2 className="font-serif text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100">
                                                            Taste of <br />
                                                            <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                                                                Bread &amp; Bakery
                                                            </span>
                                                        </h2>
                                                        <p className="text-sm font-sans text-gray-50">
                                                            Weekend discount offer
                                                        </p>
                                                        <button className="hidden sm:block lg:block text-xs mx-auto leading-6 font-serif font-medium mt-4 px-4 py-1 bg-green-500 text-center rounded-full text-white hover:bg-emerald-600">
                                                            Shop Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <div className="relative">
                                        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events mySwiper category-slider my-10">
                                            <div
                                                className="swiper-wrapper"
                                                style={{
                                                    transform: "translate3d(-3856px, 0px, 0px)",
                                                    transitionDuration: "0ms"
                                                }}
                                            >
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={8}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Honey"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Honey
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev group"
                                                    data-swiper-slide-index={9}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Sauces & Pickles"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Sauces &amp; Pickles
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active group"
                                                    data-swiper-slide-index={10}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Jam & Jelly"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Jam &amp; Jelly
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next group"
                                                    data-swiper-slide-index={11}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Snacks & Instant"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Snacks &amp; Instant
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={12}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Biscuits & Cakes"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Biscuits &amp; Cakes
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={13}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Household Tools"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Household Tools
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={14}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Baby Care"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Baby Care
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={15}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Pet Care"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Pet Care
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={16}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Beauty & Health"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Beauty &amp; Health
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={17}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Sports & Fitness"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Sports &amp; Fitness
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={0}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Fish & Meat"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Fish &amp; Meat
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={1}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Fruits & Vegetable"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Fruits &amp; Vegetable
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={2}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Fresh Seafood"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Fresh Seafood
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={3}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Cooking Essentials"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Cooking Essentials
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={4}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Breakfast"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Breakfast
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={5}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Drinks"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Drinks
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={6}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Milk & Dairy"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Milk &amp; Dairy
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={7}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Organic Food"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Organic Food
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={8}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Honey"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Honey
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-prev group"
                                                    data-swiper-slide-index={9}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Sauces & Pickles"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Sauces &amp; Pickles
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-active group"
                                                    data-swiper-slide-index={10}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Jam & Jelly"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Jam &amp; Jelly
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-next group"
                                                    data-swiper-slide-index={11}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Snacks & Instant"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Snacks &amp; Instant
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={12}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Biscuits & Cakes"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Biscuits &amp; Cakes
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={13}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Household Tools"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Household Tools
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={14}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Baby Care"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Baby Care
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={15}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Pet Care"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Pet Care
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={16}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Beauty & Health"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Beauty &amp; Health
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide group"
                                                    data-swiper-slide-index={17}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Sports & Fitness"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Sports &amp; Fitness
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={0}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Fish & Meat"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Fish &amp; Meat
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={1}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Fruits & Vegetable"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Fruits &amp; Vegetable
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={2}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Fresh Seafood"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Fresh Seafood
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={3}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Cooking Essentials"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Cooking Essentials
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={4}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Breakfast"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Breakfast
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={5}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Drinks"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Drinks
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={6}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Milk & Dairy"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Milk &amp; Dairy
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={7}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Organic Food"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Organic Food
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate group"
                                                    data-swiper-slide-index={8}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Honey"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Honey
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev group"
                                                    data-swiper-slide-index={9}
                                                    style={{ width: "184.8px", marginRight: 8 }}
                                                >
                                                    <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                                                        <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
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
                                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e"
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
                                                                    alt="Sauces & Pickles"
                                                                    srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=96&q=75 2x"
                                                                    src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=96&q=75"
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
                                                        <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                                                            Sauces &amp; Pickles
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-button-prev" />
                                            <div className="swiper-button-next" />
                                            <button className="prev">
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
                                                        d="M328 112L184 256l144 144"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="next">
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
                                                        d="M184 112l144 144-144 144"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div> */}
                                    <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                                        <h6 className="text-sm font-serif">
                                            Total <span className="font-bold">10</span> items Found
                                        </h6>
                                        <span className="text-sm font-serif">
                                            <select className="py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0">
                                                <option className="px-3" value="All" hidden="">
                                                    Sort By Price
                                                </option>
                                                <option className="px-3" value="Low">
                                                    Low to High
                                                </option>
                                                <option className="px-3" value="High">
                                                    High to Low
                                                </option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                                        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                                            <div className="relative flex justify-center w-full cursor-pointer">
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
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
                                                        alt="Dan Cake Layer Cake"
                                                        src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FWgXQg7Y%2FDan-Cake-Vanilla-Layer-Cake-25-5-Gm.jpg&w=384&q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FWgXQg7Y%2FDan-Cake-Vanilla-Layer-Cake-25-5-Gm.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FWgXQg7Y%2FDan-Cake-Vanilla-Layer-Cake-25-5-Gm.jpg&w=384&q=75 2x"
                                                    />
                                                    <noscript />
                                                </span>
                                            </div>
                                            <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                                <div className="relative mb-1">
                                                    <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                                        1box
                                                    </span>
                                                    <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                        <span className="line-clamp-2">Dan Cake Layer Cake</span>
                                                    </h2>
                                                </div>
                                                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                                    <div className="font-serif product-price font-bold">
                                                        <span className="inline-block text-lg font-semibold text-gray-800">
                                                            $8
                                                        </span>
                                                    </div>
                                                    <button
                                                        aria-label="cart"
                                                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                                                    >
                                                        {" "}
                                                        <span className="text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                                                            </svg>
                                                        </span>{" "}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                                            <div className="relative flex justify-center w-full cursor-pointer">
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
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
                                                        alt="Dan Cake Lemon"
                                                        src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FygwFCfr%2FDan-Cake-Lemon-Pound-Cake-300g.jpg&w=384&q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FygwFCfr%2FDan-Cake-Lemon-Pound-Cake-300g.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FygwFCfr%2FDan-Cake-Lemon-Pound-Cake-300g.jpg&w=384&q=75 2x"
                                                    />
                                                    <noscript />
                                                </span>
                                            </div>
                                            <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                                <div className="relative mb-1">
                                                    <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                                        1box
                                                    </span>
                                                    <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                        <span className="line-clamp-2">Dan Cake Lemon</span>
                                                    </h2>
                                                </div>
                                                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                                    <div className="font-serif product-price font-bold">
                                                        <span className="inline-block text-lg font-semibold text-gray-800">
                                                            $13
                                                        </span>
                                                    </div>
                                                    <button
                                                        aria-label="cart"
                                                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                                                    >
                                                        {" "}
                                                        <span className="text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                                                            </svg>
                                                        </span>{" "}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                                            <div className="relative flex justify-center w-full cursor-pointer">
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
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
                                                        alt="Dan Cake Pound Cake"
                                                        src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fw6Z4T7d%2FDan-Cake-Chocolate-Pound-Cake-300g.jpg&w=384&q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fw6Z4T7d%2FDan-Cake-Chocolate-Pound-Cake-300g.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2Fw6Z4T7d%2FDan-Cake-Chocolate-Pound-Cake-300g.jpg&w=384&q=75 2x"
                                                    />
                                                    <noscript />
                                                </span>
                                            </div>
                                            <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                                <div className="relative mb-1">
                                                    <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                                        1box
                                                    </span>
                                                    <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                        <span className="line-clamp-2">Dan Cake Pound Cake</span>
                                                    </h2>
                                                </div>
                                                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                                    <div className="font-serif product-price font-bold">
                                                        <span className="inline-block text-lg font-semibold text-gray-800">
                                                            $9
                                                        </span>
                                                    </div>
                                                    <button
                                                        aria-label="cart"
                                                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                                                    >
                                                        {" "}
                                                        <span className="text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                                                            </svg>
                                                        </span>{" "}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                                            <div className="relative flex justify-center w-full cursor-pointer">
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
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
                                                        alt="Dan Cake Chocolate Muffin"
                                                        src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F6Ygfpmr%2FDan-Cake-Chocolate-Muffin-25g-X-12-Pcs.jpg&w=384&q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F6Ygfpmr%2FDan-Cake-Chocolate-Muffin-25g-X-12-Pcs.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2F6Ygfpmr%2FDan-Cake-Chocolate-Muffin-25g-X-12-Pcs.jpg&w=384&q=75 2x"
                                                    />
                                                    <noscript />
                                                </span>
                                            </div>
                                            <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                                <div className="relative mb-1">
                                                    <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                                        1box
                                                    </span>
                                                    <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                        <span className="line-clamp-2">
                                                            Dan Cake Chocolate Muffin
                                                        </span>
                                                    </h2>
                                                </div>
                                                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                                    <div className="font-serif product-price font-bold">
                                                        <span className="inline-block text-lg font-semibold text-gray-800">
                                                            $10
                                                        </span>
                                                    </div>
                                                    <button
                                                        aria-label="cart"
                                                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                                                    >
                                                        {" "}
                                                        <span className="text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                                                            </svg>
                                                        </span>{" "}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                                            <div className="relative flex justify-center w-full cursor-pointer">
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
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
                                                        alt="Dan Cake"
                                                        src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FB47kJ3H%2FDan-Cake-Chocolate-Layer-Cake-12-X30g-Box.jpg&w=384&q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FB47kJ3H%2FDan-Cake-Chocolate-Layer-Cake-12-X30g-Box.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FB47kJ3H%2FDan-Cake-Chocolate-Layer-Cake-12-X30g-Box.jpg&w=384&q=75 2x"
                                                    />
                                                    <noscript />
                                                </span>
                                            </div>
                                            <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                                <div className="relative mb-1">
                                                    <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                                        1box
                                                    </span>
                                                    <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                        <span className="line-clamp-2">Dan Cake</span>
                                                    </h2>
                                                </div>
                                                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                                    <div className="font-serif product-price font-bold">
                                                        <span className="inline-block text-lg font-semibold text-gray-800">
                                                            $11
                                                        </span>
                                                    </div>
                                                    <button
                                                        aria-label="cart"
                                                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                                                    >
                                                        {" "}
                                                        <span className="text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                                                            </svg>
                                                        </span>{" "}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                                            <div className="relative flex justify-center w-full cursor-pointer">
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
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
                                                        alt="Dekko Ovaltine Cookie"
                                                        src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FLkncfJj%2FDekko-Ovaltine-Cookies-Biscuits-330g.jpg&w=384&q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FLkncfJj%2FDekko-Ovaltine-Cookies-Biscuits-330g.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FLkncfJj%2FDekko-Ovaltine-Cookies-Biscuits-330g.jpg&w=384&q=75 2x"
                                                    />
                                                    <noscript />
                                                </span>
                                            </div>
                                            <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                                <div className="relative mb-1">
                                                    <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                                        1pac
                                                    </span>
                                                    <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                        <span className="line-clamp-2">
                                                            Dekko Ovaltine Cookie
                                                        </span>
                                                    </h2>
                                                </div>
                                                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                                    <div className="font-serif product-price font-bold">
                                                        <span className="inline-block text-lg font-semibold text-gray-800">
                                                            $9
                                                        </span>
                                                    </div>
                                                    <button
                                                        aria-label="cart"
                                                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                                                    >
                                                        {" "}
                                                        <span className="text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                                                            </svg>
                                                        </span>{" "}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                                            <div className="relative flex justify-center w-full cursor-pointer">
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
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
                                                        alt="Danish Orange Biscuit"
                                                        src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhW9Y78d%2FDanish-Florida-Orange-Biscuits-210-45g.jpg&w=384&q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhW9Y78d%2FDanish-Florida-Orange-Biscuits-210-45g.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FhW9Y78d%2FDanish-Florida-Orange-Biscuits-210-45g.jpg&w=384&q=75 2x"
                                                    />
                                                    <noscript />
                                                </span>
                                            </div>
                                            <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                                <div className="relative mb-1">
                                                    <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                                        1pac
                                                    </span>
                                                    <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                        <span className="line-clamp-2">
                                                            Danish Orange Biscuit
                                                        </span>
                                                    </h2>
                                                </div>
                                                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                                    <div className="font-serif product-price font-bold">
                                                        <span className="inline-block text-lg font-semibold text-gray-800">
                                                            $8
                                                        </span>
                                                    </div>
                                                    <button
                                                        aria-label="cart"
                                                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                                                    >
                                                        {" "}
                                                        <span className="text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                                                            </svg>
                                                        </span>{" "}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                                            <div className="relative flex justify-center w-full cursor-pointer">
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
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
                                                        alt="Bisk Club Cream Biscuit"
                                                        src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FSKmXDYZ%2FBisk-Club-Shero-Cream-Biscuit-85g.jpg&w=384&q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FSKmXDYZ%2FBisk-Club-Shero-Cream-Biscuit-85g.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FSKmXDYZ%2FBisk-Club-Shero-Cream-Biscuit-85g.jpg&w=384&q=75 2x"
                                                    />
                                                    <noscript />
                                                </span>
                                            </div>
                                            <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                                <div className="relative mb-1">
                                                    <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                                        1pac
                                                    </span>
                                                    <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                        <span className="line-clamp-2">
                                                            Bisk Club Cream Biscuit
                                                        </span>
                                                    </h2>
                                                </div>
                                                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                                    <div className="font-serif product-price font-bold">
                                                        <span className="inline-block text-lg font-semibold text-gray-800">
                                                            $11
                                                        </span>
                                                    </div>
                                                    <button
                                                        aria-label="cart"
                                                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                                                    >
                                                        {" "}
                                                        <span className="text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                                                            </svg>
                                                        </span>{" "}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                                            <div className="relative flex justify-center w-full cursor-pointer">
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
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
                                                        alt="Bisk Club Masala Flavor"
                                                        src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FkDDdbv1%2FBisk-Club-Fit-Masala-Flavor-70g.jpg&w=384&q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FkDDdbv1%2FBisk-Club-Fit-Masala-Flavor-70g.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FkDDdbv1%2FBisk-Club-Fit-Masala-Flavor-70g.jpg&w=384&q=75 2x"
                                                    />
                                                    <noscript />
                                                </span>
                                            </div>
                                            <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                                <div className="relative mb-1">
                                                    <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                                        1pac
                                                    </span>
                                                    <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                        <span className="line-clamp-2">
                                                            Bisk Club Masala Flavor
                                                        </span>
                                                    </h2>
                                                </div>
                                                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                                    <div className="font-serif product-price font-bold">
                                                        <span className="inline-block text-lg font-semibold text-gray-800">
                                                            $13
                                                        </span>
                                                    </div>
                                                    <button
                                                        aria-label="cart"
                                                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                                                    >
                                                        {" "}
                                                        <span className="text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                                                            </svg>
                                                        </span>{" "}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                                            <div className="relative flex justify-center w-full cursor-pointer">
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
                                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
                                                        alt="Fun Milk Wafer Biscuit"
                                                        src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FHqVG7HV%2F2-Fun-Milk-Wafer-Biscuit-17gx12pack.jpg&w=384&q=75"
                                                        decoding="async"
                                                        data-nimg="intrinsic"
                                                        className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                                                        srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FHqVG7HV%2F2-Fun-Milk-Wafer-Biscuit-17gx12pack.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FHqVG7HV%2F2-Fun-Milk-Wafer-Biscuit-17gx12pack.jpg&w=384&q=75 2x"
                                                    />
                                                    <noscript />
                                                </span>
                                            </div>
                                            <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                                <div className="relative mb-1">
                                                    <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                                        1pac
                                                    </span>
                                                    <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                        <span className="line-clamp-2">
                                                            Fun Milk Wafer Biscuit
                                                        </span>
                                                    </h2>
                                                </div>
                                                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                                    <div className="font-serif product-price font-bold">
                                                        <span className="inline-block text-lg font-semibold text-gray-800">
                                                            $10
                                                        </span>
                                                    </div>
                                                    <button
                                                        aria-label="cart"
                                                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                                                    >
                                                        {" "}
                                                        <span className="text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                                                            </svg>
                                                        </span>{" "}
                                                    </button>
                                                </div>
                                            </div>
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

export default Search