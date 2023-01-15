function SearchBar() {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-3 
                sm:px-10
            ">
                <div className="top-bar h-16 flex items-center justify-between py-4 mx-auto
                    lg:h-auto
                ">
                    <button className="mr-3 hidden 
                        xl:mr-12
                        lg:block lg:mr-12
                        md:hidden 
                    ">
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
                                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27110%27%20height=%2740%27/%3e"
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
                                alt="logo"
                                srcSet="/logo/logo-light.svg 1x, /logo/logo-light.svg 2x"
                                src="/logo/logo-light.svg"
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
                    </button>
                    <div className="w-full transition-all duration-200 ease-in-out   
                        2xl:max-w-[900px]
                        xl:max-w-[750px] xl:mx-0
                        lg:max-w-[520px] lg:flex lg:mx-4
                        md:mx-12
                    ">
                        <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                            <div className="flex flex-col mx-auto w-full">
                                <form className="relative pr-12 bg-white overflow-hidden shadow-sm rounded-md w-full
                                    md:pr-14
                                ">
                                    <label className="flex items-center py-0.5">
                                        <input
                                            className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                                            placeholder="Search for products (e.g. fish, apple, oil)"
                                            defaultValue=""
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none
                                            md:w-14
                                    ">
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
                                                strokeMiterlimit={10}
                                                strokeWidth={32}
                                                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                            />
                                            <path
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeMiterlimit={10}
                                                strokeWidth={32}
                                                d="M338.29 338.29L448 448"
                                            />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="hidden absolute inset-y-0 right-0 pr-2 
                        xl:block
                        lg:flex
                        md:hidden md:items-center
                        sm:static sm:inset-auto sm:ml-6 sm:pr-0
                    ">
                        <button
                            className="pr-5 text-white text-2xl font-bold"
                            aria-label="Alert"
                        >
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
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                        <button
                            className="relative px-5 text-white text-2xl font-bold"
                        >
                            <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
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
                            className="pl-5 text-white text-2xl font-bold"
                        >
                            <button
                                className="leading-none font-bold font-serif block"
                            >
                                J
                            </button>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBar;