import { useNavigate } from 'react-router-dom'

function PagesDropDown() {

    const navigate = useNavigate();

    return (
        <>
            <div
                className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs bg-white opacity-100 translate-y-0"
                id="headlessui-popover-panel-196"
                tabIndex={-1}
            >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-auto flex-grow scrollbar-hide w-full h-full">
                    <div className="relative grid gap-2 px-6 py-6">
                        <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="flex-shrink-0 h-4 w-4"
                                aria-hidden="true"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="20 12 20 22 4 22 4 12" />
                                <rect x={2} y={7} width={20} height={5} />
                                <line x1={12} y1={22} x2={12} y2={7} />
                                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                            </svg>
                            <button
                                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                                onClick={() => { navigate("/offer") }}
                            >
                                Offer
                            </button>
                        </span>
                        <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                className="flex-shrink-0 h-4 w-4"
                                aria-hidden="true"
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
                            <button
                                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                                onClick={() => { navigate("/checkout") }}
                            >
                                Checkout
                            </button>
                        </span>
                        <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="flex-shrink-0 h-4 w-4"
                                aria-hidden="true"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx={12} cy={12} r={10} />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <line x1={12} y1={17} x2="12.01" y2={17} />
                            </svg>
                            <button
                                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                                onClick={() => { navigate("/faq") }}
                            >
                                FAQ
                            </button>
                        </span>
                        <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                className="flex-shrink-0 h-4 w-4"
                                aria-hidden="true"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <button
                                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                                onClick={() => { navigate("/about-us") }}
                            >
                                About Us
                            </button>
                        </span>
                        <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                className="flex-shrink-0 h-4 w-4"
                                aria-hidden="true"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                                />
                            </svg>
                            <button
                                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                                onClick={() => { navigate("/contact-us") }}
                            >
                                Contact Us
                            </button>
                        </span>
                        <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                className="flex-shrink-0 h-4 w-4"
                                aria-hidden="true"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                            <button
                                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                                onClick={() => { navigate("/privacy-policy") }}
                            >
                                Privacy Policy
                            </button>
                        </span>
                        <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                className="flex-shrink-0 h-4 w-4"
                                aria-hidden="true"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            <button
                                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                                onClick={() => { navigate("/terms-and-conditions") }}
                            >
                                Terms &amp; Conditions
                            </button>
                        </span>
                        <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="flex-shrink-0 h-4 w-4"
                                aria-hidden="true"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx={12} cy={12} r={10} />
                                <line x1={12} y1={8} x2={12} y2={12} />
                                <line x1={12} y1={16} x2="12.01" y2={16} />
                            </svg>
                            <button
                                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                                onClick={() => { navigate("/404") }}
                            >
                                404
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PagesDropDown;