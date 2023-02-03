function CategoriesDropDown() {
    return (
        <>
            <div
                className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs c-h-65vh bg-white opacity-100 translate-y-0"
                id="headlessui-popover-panel-106"
                tabIndex={-1}
            >
                <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-auto flex-grow scrollbar-hide w-full h-full">
                    <div className="flex flex-col w-full h-full bg-white cursor-pointer scrollbar-hide">
                        <div className="overflow-y-auto scrollbar-hide w-full max-h-full">
                            <div className="relative grid gap-2 p-6" style={{maxHeight:'630px'}}>
                                <a
                                    className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                    role="button"
                                >
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
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2718%27%20height=%2718%27/%3e"
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
                                            aria-hidden="true"
                                            srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75"
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
                                    <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                        Fish &amp; Meat
                                        <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
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
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoriesDropDown;