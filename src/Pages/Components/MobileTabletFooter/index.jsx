function MobileFooter(){
    return(
        <>
            <footer className="fixed z-30 bottom-0 bg-emerald-500 flex items-center justify-between w-full h-16 px-3
                lg:hidden
                sm:px-10
            ">
                <button
                    aria-label="Bar"
                    className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
                >
                    <span className="text-xl text-white">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 drop-shadow-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1={17} y1={10} x2={3} y2={10} />
                            <line x1={21} y1={6} x2={3} y2={6} />
                            <line x1={21} y1={14} x2={3} y2={14} />
                            <line x1={17} y1={18} x2={3} y2={18} />
                        </svg>
                    </span>
                </button>
                <button
                    className="text-xl text-white"
                    rel="noreferrer"
                    aria-label="Home"
                >
                    {" "}
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 drop-shadow-xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </button>
                <button className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg">
                    <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
                        0
                    </span>
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 drop-shadow-xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={9} cy={21} r={1} />
                        <circle cx={20} cy={21} r={1} />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                </button>
                <button
                    aria-label="User"
                    type="button"
                    className="text-xl text-white indicator justify-center"
                >
                    <button
                        className="leading-none font-bold font-serif block"
                    >
                        J
                    </button>
                </button>
            </footer>
        </>
    );
}

export default MobileFooter;