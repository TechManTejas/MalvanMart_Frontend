import DesktopFooter from "../Components/DesktopFooter";
import MobileFooter from "../Components/MobileTabletFooter";
import Navbar from "../Components/Navbar";
import RelatedProductCard from "../Components/RelatedProductCard";
import RelatedProductStockOutCard from "../Components/RelatedProductStockOutCard";

function ContactUs() {
    return (
        <>
            <div className="font-sans">
                <div className="bg-gray-50">
                    <div className="flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom bg-page-header">
                        <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
                            <div className="w-full flex justify-center flex-col relative">
                                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-serif text-center">
                                    Contact Us
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
                            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif">
                                <div className="border p-10 rounded-lg text-center">
                                    <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </span>
                                    <h5 className="text-xl mb-2 font-bold">Email Us</h5>
                                    <p className="mb-0 text-base opacity-90 leading-7">
                                        <a
                                            href="mailto:kachabazar@gmail.com"
                                            className="text-emerald-500"
                                        >
                                            kachabazar@gmail.com
                                        </a>{" "}
                                        Interactively grow empowered for process-centric total linkage.
                                    </p>
                                </div>
                                <div className="border p-10 rounded-lg text-center">
                                    <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </span>
                                    <h5 className="text-xl mb-2 font-bold">Call Us</h5>
                                    <p className="mb-0 text-base opacity-90 leading-7">
                                        <a href="mailto:029-00124667" className="text-emerald-500">
                                            029-00124667
                                        </a>{" "}
                                        Distinctively disseminate focused solutions clicks-and-mortar
                                        ministate.
                                    </p>
                                </div>
                                <div className="border p-10 rounded-lg text-center">
                                    <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx={12} cy={10} r={3} />
                                        </svg>
                                    </span>
                                    <h5 className="text-xl mb-2 font-bold">Location</h5>
                                    <p className="mb-0 text-base opacity-90 leading-7">
                                        <a href="mailto:" className="text-emerald-500" /> Cecilia Chapman,
                                        561-4535 Nulla LA, United States 96522
                                    </p>
                                </div>
                            </div>
                            <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
                                <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
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
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27874%27%20height=%27874%27/%3e"
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
                                            srcSet="/_next/image?url=%2Fcontact-us.png&w=1080&q=75 1x, /_next/image?url=%2Fcontact-us.png&w=1920&q=75 2x"
                                            src="/_next/image?url=%2Fcontact-us.png&w=1920&q=75"
                                            decoding="async"
                                            data-nimg="intrinsic"
                                            className="block w-auto"
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
                                <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
                                    <form className="w-full mx-auto flex flex-col justify-center">
                                        <div className="mb-12">
                                            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-3">
                                                For any suppoort just send your query
                                            </h3>
                                            <p className="text-base opacity-90 leading-7">
                                                Collaboratively promote client-focused convergence vis-a-vis
                                                customer directed alignments via plagiarize strategic users
                                                and standardized infrastructures.
                                            </p>
                                        </div>
                                        <div className="flex flex-col space-y-5">
                                            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                                                <div className="w-full md:w-1/2 ">
                                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                        Your Name
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            placeholder="Inter Your Name"
                                                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
                                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                        Your Email
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            placeholder="Inter Your Email"
                                                            className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                    Subject
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        name="subject"
                                                        type="text"
                                                        placeholder="Inter Your Subject"
                                                        className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="relative mb-4">
                                                <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    rows={4}
                                                    placeholder="Write your message here"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="relative">
                                                <button
                                                    data-variant="flat"
                                                    className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-base w-full sm:w-auto"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
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

export default ContactUs