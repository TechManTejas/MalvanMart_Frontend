import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CategoriesDropDown from '../CategoriesDropDown';
import PagesDropDown from '../PagesDropDown';

function NavigationBar() {

    const navigate = useNavigate();
    const [openPages, setOpenPages] = useState(false);
    const [openCategories, setOpenCategories] = useState(false)

    return (
        <>
            <div className="hidden bg-white border-b
                xl:block
                lg:block
            ">
                <div className="max-w-screen-2xl mx-auto px-3 h-12 flex justify-between items-center
                    sm:px-10
                ">
                    <div className="inline-flex">
                        <div className="relative">
                            <div className="max-w-7xl mx-auto">
                                <div className="flex justify-between items-center
                                    md:justify-start md:space-x-10
                                ">
                                    <nav className="space-x-10 items-center
                                        md:flex
                                    ">
                                        <div className="relative font-serif">
                                            <button
                                                className="group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none"
                                                id="headlessui-popover-button-11"
                                                type="button"
                                                aria-expanded="false"
                                                onClick={()=>setOpenCategories(!openCategories)}
                                            >
                                                <span className="font-serif text-sm font-medium">
                                                    Categories
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </button>
                                            {openCategories &&
                                                <>
                                                <CategoriesDropDown />
                                                </>
                                            }
                                        </div>
                                        <button
                                            className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                                            onClick={() => { navigate("/about-us") }}
                                        >
                                            About Us
                                        </button>
                                        <button
                                            className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                                            onClick={() => { navigate("/contact-us") }}
                                        >
                                            Contact Us
                                        </button>
                                        <div className="relative font-serif">
                                            <button
                                                className="group inline-flex items-center py-2 text-sm font-medium hover:text-emerald-600 focus:outline-none"
                                                id="headlessui-popover-button-14"
                                                type="button"
                                                aria-expanded="false"
                                                onClick={() => setOpenPages(!openPages)}
                                            >
                                                <span>Pages</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </button>
                                            {openPages &&
                                                <>
                                                    <PagesDropDown />
                                                </>
                                            }
                                        </div>
                                        <button
                                            className="relative inline-flex items-center h-6 bg-red-100 font-serif ml-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-emerald-600"
                                            onClick={() => { navigate("/offer") }}
                                        >
                                            Offers
                                            <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                                            </div>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <button
                            className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                            onClick={() => { navigate("/privacy-policy") }}
                        >
                            Privacy Policy
                        </button>
                        <button
                            className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                            onClick={() => { navigate("/terms-and-conditions") }}
                        >
                            Terms &amp; Conditions
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;