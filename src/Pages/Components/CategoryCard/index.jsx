function CategoryCard(){
    return(
        <>
            <li className="group">
                <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                        <div>
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
                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=96&q=75 2x"
                                />
                                <noscript />
                            </span>
                        </div>
                        <div className="pl-4">
                            <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                                Fish &amp; Meat
                            </h3>
                            <ul className="pt-1 mt-1">
                                <li className="pt-1">
                                    <a
                                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                        href="/search?category=fish"
                                    >
                                        <span className="text-xs text-gray-400 hover:text-emerald-600">
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
                                                    strokeLinecap="square"
                                                    strokeMiterlimit={10}
                                                    strokeWidth={48}
                                                    d="M184 112l144 144-144 144"
                                                />
                                            </svg>
                                        </span>
                                        Fish
                                    </a>
                                </li>
                                <li className="pt-1">
                                    <a
                                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                        href="/search?category=meat"
                                    >
                                        <span className="text-xs text-gray-400 hover:text-emerald-600">
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
                                                    strokeLinecap="square"
                                                    strokeMiterlimit={10}
                                                    strokeWidth={48}
                                                    d="M184 112l144 144-144 144"
                                                />
                                            </svg>
                                        </span>
                                        Meat
                                    </a>
                                </li>
                                <li className="pt-1">
                                    <a
                                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                        href="/search?category=meat"
                                    >
                                        <span className="text-xs text-gray-400 hover:text-emerald-600">
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
                                                    strokeLinecap="square"
                                                    strokeMiterlimit={10}
                                                    strokeWidth={48}
                                                    d="M184 112l144 144-144 144"
                                                />
                                            </svg>
                                        </span>
                                        Meat
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

export default CategoryCard;