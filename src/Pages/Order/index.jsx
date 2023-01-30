import DesktopFooter from "../Components/DesktopFooter";
import MobileFooter from "../Components/MobileTabletFooter";
import Navbar from "../Components/Navbar";
import RelatedProductCard from "../Components/RelatedProductCard";
import RelatedProductStockOutCard from "../Components/RelatedProductStockOutCard";

function Order() {
    return (
        <>
            <div className="font-sans">
                <div className="bg-gray-50">
                    <div className="max-w-screen-2xl mx-auto py-10 px-3 sm:px-6">
                        <div className="bg-emerald-100 rounded-md mb-5 px-4 py-3">
                            <label>
                                Thank you{" "}
                                <span className="font-bold text-emerald-600">Tejas Vaij,</span> Your
                                order have been received !
                            </label>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm">
                            <div>
                                <div className="bg-indigo-50 p-8 rounded-t-xl">
                                    <div className="flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50">
                                        <h1 className="font-bold font-serif text-2xl uppercase">
                                            Invoice
                                        </h1>
                                        <div className="lg:text-right text-left">
                                            <h2 className="text-lg font-serif font-semibold mt-4 lg:mt-0 md:mt-0">
                                                <a className="" href="/">
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
                                                            srcSet="/logo/logo-color.svg 1x, /logo/logo-color.svg 2x"
                                                            src="/logo/logo-color.svg"
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
                                                </a>
                                            </h2>
                                            <p className="text-sm text-gray-500">
                                                Cecilia Chapman, 561-4535 Nulla LA, <br /> United States 96522{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
                                        <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                                            <span className="font-bold font-serif text-sm uppercase text-gray-600 block">
                                                Date
                                            </span>
                                            <span className="text-sm text-gray-500 block">
                                                <span>January 27, 2023</span>
                                            </span>
                                        </div>
                                        <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                                            <span className="font-bold font-serif text-sm uppercase text-gray-600 block">
                                                Invoice No.
                                            </span>
                                            <span className="text-sm text-gray-500 block">#10229</span>
                                        </div>
                                        <div className="flex flex-col lg:text-right text-left">
                                            <span className="font-bold font-serif text-sm uppercase text-gray-600 block">
                                                Invoice To.
                                            </span>
                                            <span className="text-sm text-gray-500 block">
                                                Tejas Vaij
                                                <br />
                                                Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,
                                                <br />
                                                Pune, India, 412105
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="s">
                                    <div className="overflow-hidden lg:overflow-visible px-8 my-10">
                                        <div className="-my-2 overflow-x-auto">
                                            <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr className="text-xs bg-gray-100">
                                                        <th
                                                            scope="col"
                                                            className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
                                                        >
                                                            Sr.
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
                                                        >
                                                            Product Name
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
                                                        >
                                                            Quantity
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
                                                        >
                                                            Item Price
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-right"
                                                        >
                                                            Amount
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-100 text-serif text-sm">
                                                    <tr>
                                                        <th className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
                                                            1{" "}
                                                        </th>
                                                        <td className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
                                                            Wild King Salmon Steak
                                                        </td>
                                                        <td className="px-6 py-1 whitespace-nowrap font-bold text-center">
                                                            1{" "}
                                                        </td>
                                                        <td className="px-6 py-1 whitespace-nowrap font-bold text-center font-DejaVu">
                                                            $12.00{" "}
                                                        </td>
                                                        <td className="px-6 py-1 whitespace-nowrap text-right font-bold font-DejaVu k-grid text-red-500">
                                                            $12.00
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-b border-gray-100 p-10 bg-emerald-50">
                                    <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
                                        <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col sm:flex-wrap">
                                            <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">
                                                Payment Method
                                            </span>
                                            <span className="text-sm text-gray-500 font-semibold font-serif block">
                                                COD
                                            </span>
                                        </div>
                                        <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col sm:flex-wrap">
                                            <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">
                                                Shipping Cost
                                            </span>
                                            <span className="text-sm text-gray-500 font-semibold font-serif block">
                                                $60.00
                                            </span>
                                        </div>
                                        <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col sm:flex-wrap">
                                            <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">
                                                Discount
                                            </span>
                                            <span className="text-sm text-gray-500 font-semibold font-serif block">
                                                $0.00
                                            </span>
                                        </div>
                                        <div className="flex flex-col sm:flex-wrap">
                                            <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">
                                                Total Amount
                                            </span>
                                            <span className="text-2xl font-serif font-bold text-red-500 block">
                                                $72.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-b-xl">
                                <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between">
                                    <a download="Invoice">Loading...</a>
                                    <button className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md">
                                        Print Invoice{" "}
                                        <span className="ml-2">
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
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                    d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
                                                />
                                                <rect
                                                    width={256}
                                                    height={208}
                                                    x={128}
                                                    y={240}
                                                    fill="none"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                    rx="24.32"
                                                    ry="24.32"
                                                />
                                                <path
                                                    fill="none"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                    d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
                                                />
                                                <circle cx={392} cy={184} r={24} />
                                            </svg>
                                        </span>
                                    </button>
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

export default Order