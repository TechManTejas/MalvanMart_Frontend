function Cart() {
    return (
        <>
            <div>
                <div>
                    <button
                        type="button"
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            width: 1,
                            height: 1,
                            padding: 0,
                            margin: "-1px",
                            overflow: "hidden",
                            clip: "rect(0px, 0px, 0px, 0px)",
                            whiteSpace: "nowrap",
                            borderWidth: 0
                        }}
                    />
                    <div>
                        <div
                            className="fixed inset-0 z-30 overflow-y-auto text-center"
                        >
                            <div className="min-h-screen px-4">
                                <div
                                    className="fixed inset-0 bg-black opacity-60 ease-out duration-300"
                                    id="headlessui-dialog-overlay-592"
                                    aria-hidden="true"
                                />
                                <div className="top-0 right-0 fixed h-screen z-50 w-[400px] ">
                                    <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer">
                                        <div className="w-full flex justify-between items-center relative px-5 py-4 border-b bg-indigo-50 border-gray-100">
                                            <h2 className="font-semibold font-serif text-lg m-0 text-heading flex items-center">
                                                <span className="text-xl mr-2 mb-1">
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
                                                            d="M320 264l-89.6 112-38.4-44.88"
                                                        />
                                                        <path
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={32}
                                                            d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                        />
                                                    </svg>
                                                </span>
                                                Shopping Cart
                                            </h2>
                                            <button className="inline-flex text-base items-center justify-center text-gray-500 p-2 focus:outline-none transition-opacity hover:text-red-400">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                                                </svg>
                                                <span className="font-sens text-sm text-gray-500 hover:text-red-400 ml-1">
                                                    Close
                                                </span>
                                            </button>
                                        </div>
                                        <div className="overflow-y-auto flex-grow scrollbar-hide w-full max-h-full">
                                            <div className="flex flex-col h-full justify-center">
                                                <div className="flex flex-col items-center">
                                                    <div className="flex justify-center items-center w-20 h-20 rounded-full bg-emerald-100">
                                                        <span className="text-emerald-600 text-4xl block">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <h3 className="font-serif font-semibold text-gray-700 text-lg pt-5">
                                                        Your cart is empty
                                                    </h3>
                                                    <p className="px-12 text-center text-sm text-gray-500 pt-2">
                                                        No items added in your cart. Please add product to your cart
                                                        list.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mx-5 my-3">
                                            <button className="w-full py-3 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300">
                                                <span className="align-middle font-medium font-serif">
                                                    Proceed To Checkout
                                                </span>
                                                <span className="rounded-lg font-bold font-serif py-2 px-3 bg-white text-emerald-600">
                                                    $0.00
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <i className="drawer-handle-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            width: 1,
                            height: 1,
                            padding: 0,
                            margin: "-1px",
                            overflow: "hidden",
                            clip: "rect(0px, 0px, 0px, 0px)",
                            whiteSpace: "nowrap",
                            borderWidth: 0
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default Cart;