function RelatedProductStockOutCard() {
    return (
        <>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                <div className="relative flex justify-center w-full cursor-pointer">
                    <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4">
                        Stock Out
                    </span>
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
                            alt="Radicchio"
                            srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F5y7rNDFv%2FRadicchio-12ct.jpg&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F5y7rNDFv%2FRadicchio-12ct.jpg&w=384&q=75 2x"
                            src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F5y7rNDFv%2FRadicchio-12ct.jpg&w=384&q=75"
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
                        />
                    </span>
                </div>
                <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                    <div className="relative mb-1">
                        <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            12ct
                        </span>
                        <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Radicchio</span>
                        </h2>
                    </div>
                    <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                        <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                                $15
                            </span>
                        </div>
                        <button
                            disabled=""
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
        </>
    );
}

export default RelatedProductStockOutCard;