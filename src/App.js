function App() {
  return (
    <>
      <div className="font-sans">
        <div className="hidden lg:block bg-gray-100">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            <div className="text-gray-700 py-2 font-sans text-xs font-medium border-b flex justify-between items-center">
              <span className="flex items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                We are available 24/7, Need help? Call Us:{" "}
                <a
                  href="tel:+012345609"
                  className="font-bold text-emerald-500 ml-1"
                >
                  +01234560352
                </a>
              </span>
              <div className="lg:text-right flex items-center">
                <a
                  className="font-medium hover:text-emerald-600"
                  href="/about-us"
                >
                  About Us
                </a>
                <span className="mx-2">|</span>
                <a
                  className="font-medium hover:text-emerald-600"
                  href="/contact-us"
                >
                  Contact Us
                </a>
                <span className="mx-2">|</span>
                <button className="font-medium hover:text-emerald-600">
                  My account
                </button>
                <span className="mx-2">|</span>
                <button className="flex items-center font-medium hover:text-emerald-600">
                  <span className="mr-1">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </span>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-emerald-500 sticky top-0 z-20">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
              <a
                className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block"
                href="/"
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
              </a>
              <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
                <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                  <div className="flex flex-col mx-auto w-full">
                    <form className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full">
                      <label className="flex items-center py-0.5">
                        <input
                          className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                          placeholder="Search for products (e.g. fish, apple, oil)"
                          defaultValue=""
                        />
                      </label>
                      <button
                        aria-label="Search"
                        type="submit"
                        className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                      >
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
              <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                  aria-label="Total"
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
                  aria-label="Login"
                >
                  <a
                    className="leading-none font-bold font-serif block"
                    href="/user/dashboard"
                  >
                    J
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block xl:block bg-white border-b">
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center">
              <div className="inline-flex">
                <div className="relative">
                  <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center md:justify-start md:space-x-10">
                      <nav className="md:flex space-x-10 items-center">
                        <div className="relative font-serif">
                          <button
                            className="group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none"
                            id="headlessui-popover-button-11"
                            type="button"
                            aria-expanded="false"
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
                        </div>
                        <a
                          className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                          href="/about-us"
                        >
                          About Us
                        </a>
                        <a
                          className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                          href="/contact-us"
                        >
                          Contact Us
                        </a>
                        <div className="relative font-serif">
                          <button
                            className="group inline-flex items-center py-2 text-sm font-medium hover:text-emerald-600 focus:outline-none"
                            id="headlessui-popover-button-14"
                            type="button"
                            aria-expanded="false"
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
                        </div>
                        <a
                          className="relative inline-flex items-center h-6 bg-red-100 font-serif ml-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-emerald-600"
                          href="/offer"
                        >
                          Offers
                          <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                          </div>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <a
                  className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
                <a
                  className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                  href="/terms-and-conditions"
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="min-h-screen">
            <button aria-label="Cart" className="absolute">
              <div className="right-0 w-35 float-right fixed top-2/4 bottom-2/4 align-middle shadow-lg cursor-pointer z-30 hidden lg:block xl:block">
                <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-tl-lg p-2 text-gray-700">
                  <span className="text-2xl mb-1 text-emerald-600">
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
                        d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                      />
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
                      />
                    </svg>
                  </span>
                  <span className="px-2 text-sm font-serif font-medium">
                    0 Items
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center bg-emerald-700 p-2 text-white text-base font-serif font-medium rounded-bl-lg mx-auto">
                  $0.00
                </div>
              </div>
            </button>
            <div className="bg-white">
              <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
                <div className="flex w-full">
                  <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                    <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events mySwiper swiper-backface-hidden">
                      <div
                        className="swiper-wrapper"
                        style={{
                          transform: "translate3d(-2640px, 0px, 0px)",
                          transitionDuration: "0ms"
                        }}
                      >
                        <div
                          className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active h-full relative rounded-lg overflow-hidden"
                          data-swiper-slide-index={2}
                          style={{ width: 850, marginRight: 30 }}
                        >
                          <div className="text-sm text-gray-600 hover:text-emerald-dark">
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "relative"
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
                                  padding: "42.1053% 0px 0px"
                                }}
                              />
                              <img
                                alt="Quality Freshness Guaranteed!"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async"
                                data-nimg="responsive"
                                className="object-cover"
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
                              <noscript />
                            </span>
                          </div>
                          <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                              <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                                Quality Freshness Guaranteed!
                              </h1>
                              <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                                Intrinsicly fashion performance based products
                                rather than accurate benefits...
                              </p>
                              <a
                                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
                                href="/search?category=fresh-vegetable"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-duplicate-next h-full relative rounded-lg overflow-hidden"
                          data-swiper-slide-index={0}
                          style={{ width: 850, marginRight: 30 }}
                        >
                          <div className="text-sm text-gray-600 hover:text-emerald-dark">
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "relative"
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
                                  padding: "42.1053% 0px 0px"
                                }}
                              />
                              <img
                                alt="The Best Quality Products Guaranteed!"
                                src="/_next/image?url=%2Fslider%2Fslider-1.jpg&w=3840&q=75"
                                decoding="async"
                                data-nimg="responsive"
                                className="object-cover"
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
                                sizes="100vw"
                                srcSet="/_next/image?url=%2Fslider%2Fslider-1.jpg&w=640&q=75 640w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=750&q=75 750w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=828&q=75 828w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=3840&q=75 3840w"
                              />
                              <noscript />
                            </span>
                          </div>
                          <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                              <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                                The Best Quality Products Guaranteed!
                              </h1>
                              <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                                Dramatically facilitate effective total linkage
                                for go forward processes...
                              </p>
                              <a
                                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
                                href="/search?Category=biscuits--cakes"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-prev h-full relative rounded-lg overflow-hidden"
                          data-swiper-slide-index={1}
                          style={{ width: 850, marginRight: 30 }}
                        >
                          <div className="text-sm text-gray-600 hover:text-emerald-dark">
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "relative"
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
                                  padding: "42.1053% 0px 0px"
                                }}
                              />
                              <img
                                alt="Best Different Type of Grocery Store"
                                src="/_next/image?url=%2Fslider%2Fslider-2.jpg&w=3840&q=75"
                                decoding="async"
                                data-nimg="responsive"
                                className="object-cover"
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
                                sizes="100vw"
                                srcSet="/_next/image?url=%2Fslider%2Fslider-2.jpg&w=640&q=75 640w, /_next/image?url=%2Fslider%2Fslider-2.jpg&w=750&q=75 750w, /_next/image?url=%2Fslider%2Fslider-2.jpg&w=828&q=75 828w, /_next/image?url=%2Fslider%2Fslider-2.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fslider%2Fslider-2.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fslider%2Fslider-2.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fslider%2Fslider-2.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fslider%2Fslider-2.jpg&w=3840&q=75 3840w"
                              />
                              <noscript />
                            </span>
                          </div>
                          <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                              <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                                Best Different Type of Grocery Store
                              </h1>
                              <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                                Quickly aggregate empowered networks after
                                emerging products...
                              </p>
                              <a
                                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
                                href="/search?Category=fish--meat"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-active h-full relative rounded-lg overflow-hidden"
                          data-swiper-slide-index={2}
                          style={{ width: 850, marginRight: 30 }}
                        >
                          <div className="text-sm text-gray-600 hover:text-emerald-dark">
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "relative"
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
                                  padding: "42.1053% 0px 0px"
                                }}
                              />
                              <img
                                alt="Quality Freshness Guaranteed!"
                                src="/_next/image?url=%2Fslider%2Fslider-3.jpg&w=3840&q=75"
                                decoding="async"
                                data-nimg="responsive"
                                className="object-cover"
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
                                sizes="100vw"
                                srcSet="/_next/image?url=%2Fslider%2Fslider-3.jpg&w=640&q=75 640w, /_next/image?url=%2Fslider%2Fslider-3.jpg&w=750&q=75 750w, /_next/image?url=%2Fslider%2Fslider-3.jpg&w=828&q=75 828w, /_next/image?url=%2Fslider%2Fslider-3.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fslider%2Fslider-3.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fslider%2Fslider-3.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fslider%2Fslider-3.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fslider%2Fslider-3.jpg&w=3840&q=75 3840w"
                              />
                              <noscript />
                            </span>
                          </div>
                          <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                              <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                                Quality Freshness Guaranteed!
                              </h1>
                              <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                                Intrinsicly fashion performance based products
                                rather than accurate benefits...
                              </p>
                              <a
                                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
                                href="/search?category=fresh-vegetable"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-duplicate swiper-slide-next h-full relative rounded-lg overflow-hidden"
                          data-swiper-slide-index={0}
                          style={{ width: 850, marginRight: 30 }}
                        >
                          <div className="text-sm text-gray-600 hover:text-emerald-dark">
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "relative"
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
                                  padding: "42.1053% 0px 0px"
                                }}
                              />
                              <img
                                alt="The Best Quality Products Guaranteed!"
                                src="/_next/image?url=%2Fslider%2Fslider-1.jpg&w=3840&q=75"
                                decoding="async"
                                data-nimg="responsive"
                                className="object-cover"
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
                                sizes="100vw"
                                srcSet="/_next/image?url=%2Fslider%2Fslider-1.jpg&w=640&q=75 640w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=750&q=75 750w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=828&q=75 828w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fslider%2Fslider-1.jpg&w=3840&q=75 3840w"
                              />
                            </span>
                          </div>
                          <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                              <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                                The Best Quality Products Guaranteed!
                              </h1>
                              <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                                Dramatically facilitate effective total linkage
                                for go forward processes...
                              </p>
                              <a
                                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
                                href="/search?Category=biscuits--cakes"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                        <span className="swiper-pagination-bullet" />
                        <span className="swiper-pagination-bullet" />
                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full hidden lg:flex">
                    <div className="w-full group">
                      <div className="bg-gray-50 h-full border-2 border-orange-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow">
                        <div className="bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
                          <h3 className="text-base font-serif font-medium ">
                            Latest Super Discount Active Coupon Code
                          </h3>
                        </div>
                        <div className="overflow-hidden">
                          <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
                            <div className="tengah py-2 px-3 flex items-center justify-items-start">
                              <figure>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
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
                                    alt="October Gift Voucher"
                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-lg"
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
                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=256&q=75 2x"
                                  />
                                  <noscript />
                                </span>
                              </figure>
                              <div className="ml-3">
                                <div className="flex items-center font-serif">
                                  <h6 className="pl-1 text-base font-medium text-gray-600">
                                    <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                                      10%
                                    </span>{" "}
                                    Off
                                  </h6>
                                  <div className="ml-2">
                                    <span className="text-emerald-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-emerald-100">
                                      Active
                                    </span>
                                  </div>
                                </div>
                                <h2 className="pl-1 font-serif text-base text-gray-700 leading-6 font-semibold mb-2">
                                  October Gift Voucher
                                </h2>
                                <span className="inline-block mb-2">
                                  <div className="flex items-center font-semibold">
                                    <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                      16
                                    </span>
                                    :
                                    <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                      17
                                    </span>
                                    :
                                    <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                      41
                                    </span>
                                    :
                                    <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                      24
                                    </span>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
                              <div className="info flex items-center">
                                <div className="w-full">
                                  <div className="block">
                                    <div className="font-serif border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block">
                                      <button className="block w-full">
                                        <span className="uppercase font-serif font-semibold text-sm leading-7 text-emerald-600">
                                          OCTOBER21{" "}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <p className="text-xs leading-4 text-gray-500 mt-2">
                                    * This coupon apply when shopping more then{" "}
                                    <span className="font-bold"> $500</span>{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
                            <div className="tengah py-2 px-3 flex items-center justify-items-start">
                              <figure>
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
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
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
                                    alt="Winter Gift Voucher"
                                    src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FwBBYm7j%2Fins4.jpg&w=256&q=75"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-lg"
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
                                    srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FwBBYm7j%2Fins4.jpg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FwBBYm7j%2Fins4.jpg&w=256&q=75 2x"
                                  />
                                  <noscript />
                                </span>
                              </figure>
                              <div className="ml-3">
                                <div className="flex items-center font-serif">
                                  <h6 className="pl-1 text-base font-medium text-gray-600">
                                    <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                                      15%
                                    </span>{" "}
                                    Off
                                  </h6>
                                  <div className="ml-2">
                                    <span className="text-emerald-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-emerald-100">
                                      Active
                                    </span>
                                  </div>
                                </div>
                                <h2 className="pl-1 font-serif text-base text-gray-700 leading-6 font-semibold mb-2">
                                  Winter Gift Voucher
                                </h2>
                                <span className="inline-block mb-2">
                                  <div className="flex items-center font-semibold">
                                    <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                      44
                                    </span>
                                    :
                                    <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                      17
                                    </span>
                                    :
                                    <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                      41
                                    </span>
                                    :
                                    <span className="flex items-center justify-center bg-emerald-500 text-white  text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
                                      24
                                    </span>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
                              <div className="info flex items-center">
                                <div className="w-full">
                                  <div className="block">
                                    <div className="font-serif border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block">
                                      <button className="block w-full">
                                        <span className="uppercase font-serif font-semibold text-sm leading-7 text-emerald-600">
                                          WINTER21{" "}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <p className="text-xs leading-4 text-gray-500 mt-2">
                                    * This coupon apply when shopping more then{" "}
                                    <span className="font-bold"> $500</span>{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="font-serif text-xl">
                        <span className="text-emerald-600 font-bold">
                          100% Natural Quality
                        </span>{" "}
                        Organic Product
                      </h1>
                      <p className="text-gray-500">
                        See Our latest discounted products from here and get a
                        special
                        <a className="text-emerald-600 ml-1" href="/#discount">
                          discount product
                        </a>
                      </p>
                    </div>
                    <a
                      className="text-sm font-serif font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700"
                      href="/search?Category=organic-food"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 lg:py-16 py-10">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="mb-10 flex justify-center">
                  <div className="text-center w-full lg:w-2/5">
                    <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                      Featured Categories
                    </h2>
                    <p className="text-base font-sans text-gray-600 leading-6">
                      Choose your necessary products from this feature categories.
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Fruits & Vegetable"
                              src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=96&q=75"
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
                              srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=96&q=75 2x"
                            />
                            <noscript />
                          </span>
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Fruits &amp; Vegetable
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=dry-fruits"
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
                                Dry Fruits
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=fresh-fruits"
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
                                Fresh Fruits
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=fresh-vegetable"
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
                                Fresh Vegetable
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Fresh Seafood"
                              src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=96&q=75"
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
                              srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=96&q=75 2x"
                            />
                            <noscript />
                          </span>
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Fresh Seafood
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=fresh-seafood"
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
                                Fresh Seafood
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Cooking Essentials"
                              src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=96&q=75"
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
                              srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=96&q=75 2x"
                            />
                            <noscript />
                          </span>
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Cooking Essentials
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=oil"
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
                                Oil
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=rice"
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
                                Rice
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=flour"
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
                                Flour
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Breakfast"
                              src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=96&q=75"
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
                              srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=96&q=75 2x"
                            />
                            <noscript />
                          </span>
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Breakfast
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=bread"
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
                                Bread
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=cereal"
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
                                Cereal
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Drinks"
                              src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=96&q=75"
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
                              srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=96&q=75 2x"
                            />
                            <noscript />
                          </span>
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Drinks
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=tea"
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
                                Tea
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=water"
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
                                Water
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=juice"
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
                                Juice
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Milk & Dairy"
                              src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=96&q=75"
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
                              srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=96&q=75 2x"
                            />
                            <noscript />
                          </span>
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Milk &amp; Dairy
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=dairy"
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
                                Dairy
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=ice-cream"
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
                                Ice Cream
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=butter--ghee"
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
                                Butter &amp; Ghee
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Organic Food"
                              src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=96&q=75"
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
                              srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=96&q=75 2x"
                            />
                            <noscript />
                          </span>
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Organic Food
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=organic-food"
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
                                Organic Food
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Honey"
                              srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=96&q=75 2x"
                              src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=96&q=75"
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
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Honey
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=honey"
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
                                Honey
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Sauces & Pickles"
                              srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=96&q=75 2x"
                              src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=96&q=75"
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
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Sauces &amp; Pickles
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=sauces"
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
                                Sauces
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=pickles--condiments"
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
                                Pickles &amp; Condiments
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Jam & Jelly"
                              srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=96&q=75 2x"
                              src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=96&q=75"
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
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Jam &amp; Jelly
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=jam--jelly"
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
                                Jam &amp; Jelly
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Snacks & Instant"
                              srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=96&q=75 2x"
                              src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=96&q=75"
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
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Snacks &amp; Instant
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=chocolate"
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
                                Chocolate
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=chips--nuts"
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
                                Chips &amp; Nuts
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=canned-food"
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
                                Canned Food
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Biscuits & Cakes"
                              srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=96&q=75 2x"
                              src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=96&q=75"
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
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Biscuits &amp; Cakes
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=cakes"
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
                                Cakes
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=biscuits"
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
                                Biscuits
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Household Tools"
                              srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=96&q=75 2x"
                              src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=96&q=75"
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
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Household Tools
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=cleaner"
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
                                Cleaner
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=laundry"
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
                                Laundry
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=air-freshener"
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
                                Air Freshener
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Baby Care"
                              srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=96&q=75 2x"
                              src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=96&q=75"
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
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Baby Care
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=baby-food"
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
                                Baby Food
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=baby-accessories"
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
                                Baby Accessories
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Pet Care"
                              srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=96&q=75 2x"
                              src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=96&q=75"
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
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Pet Care
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=cat-care"
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
                                Cat Care
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=dog-care"
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
                                Dog Care
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=bird-care"
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
                                Bird Care
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Beauty & Health"
                              src="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=96&q=75"
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
                              srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=96&q=75 2x"
                            />
                            <noscript />
                          </span>
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Beauty &amp; Health
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=bath"
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
                                Bath
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=cosmetics"
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
                                Cosmetics
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=oral-care"
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
                                Oral Care
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
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
                              alt="Sports & Fitness"
                              src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=96&q=75"
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
                              srcSet="/_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=96&q=75 2x"
                            />
                            <noscript />
                          </span>
                        </div>
                        <div className="pl-4">
                          <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                            Sports &amp; Fitness
                          </h3>
                          <ul className="pt-1 mt-1">
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=sports"
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
                                Sports
                              </a>
                            </li>
                            <li className="pt-1">
                              <a
                                className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                                href="/search?category=fitness"
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
                                Fitness
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="block mx-auto max-w-screen-2xl">
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                <div className="lg:p-16 p-6 bg-emerald-500 shadow-sm border rounded-lg">
                  <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="lg:w-3/5">
                        <span className="text-base lg:text-lg">
                          Organic Products and Food
                        </span>
                        <h2 className="font-serif text-lg lg:text-2xl font-bold mb-1">
                          Quick Delivery to{" "}
                          <span className="text-emerald-500">Your Home</span>
                        </h2>
                        <p className="text-sm font-sans leading-6">
                          There are many products you will find our shop, Choose
                          your daily necessary product from our KachaBazar shop
                          and get some special offer. See Our latest discounted
                          products from here and get a special discount.
                        </p>
                        <a
                          className="lg:w-1/4 text-xs font-serif font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white hover:bg-emerald-600"
                          href="/#downloadApp"
                        >
                          Download App
                        </a>
                      </div>
                      <div className="w-1/5 flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-end">
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
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27373%27%20height=%27250%27/%3e"
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
                            alt="app download"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="discount"
              className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
            >
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                    Latest Discounted Products
                  </h2>
                  <p className="text-base font-sans text-gray-600 leading-6">
                    See Our latest discounted products below. Choose your daily
                    needs from here and get a special discount with free shipping.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          17% Off
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
                            alt="Organic Bell Pepper"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            22ct
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">
                              Organic Bell Pepper
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $10
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $12
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          7% Off
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
                            alt="Iglotex Cauliflower"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            each
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">
                              Iglotex Cauliflower
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $14
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $15
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          7% Off
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
                            alt="Escarole"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            1ct
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Escarole</span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $13
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $14
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          20% Off
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
                            alt="Haitian Mangoe"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            8ct
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Haitian Mangoe</span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $8
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $10
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          13% Off
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
                            alt="Cranberries"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            9.5oz
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Cranberries</span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $13
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $15
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          8% Off
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
                            alt="Mandarin Clementine"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            22lb
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">
                              Mandarin Clementine
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $11
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $12
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          10% Off
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
                            alt="Orange Imported"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            1kg
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Orange Imported</span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $9
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $10
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          9% Off
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
                            alt="Pineapple"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            1pcs
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Pineapple</span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $10
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $11
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          17% Off
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
                            alt="Organic Bell Pepper"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            22ct
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">
                              Organic Bell Pepper
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $10
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $12
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          7% Off
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
                            alt="Iglotex Cauliflower"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            each
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">
                              Iglotex Cauliflower
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $14
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $15
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          7% Off
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
                            alt="Escarole"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            1ct
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Escarole</span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $13
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $14
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          20% Off
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
                            alt="Haitian Mangoe"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            8ct
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Haitian Mangoe</span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $8
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $10
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          13% Off
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
                            alt="Cranberries"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            9.5oz
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Cranberries</span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $13
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $15
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          8% Off
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
                            alt="Mandarin Clementine"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            22lb
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">
                              Mandarin Clementine
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $11
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $12
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          10% Off
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
                            alt="Orange Imported"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            1kg
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Orange Imported</span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $9
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $10
                            </del>
                          </div>
                          <button
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
                    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                      <div className="relative flex justify-center w-full cursor-pointer">
                        <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                          9% Off
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
                            alt="Pineapple"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                          <noscript />
                        </span>
                      </div>
                      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                        <div className="relative mb-1">
                          <span className="text-gray-400 font-medium text-xs d-block mb-1">
                            1pcs
                          </span>
                          <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                            <span className="line-clamp-2">Pineapple</span>
                          </h2>
                        </div>
                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                          <div className="font-serif product-price font-bold">
                            <span className="inline-block text-lg font-semibold text-gray-800">
                              $10
                            </span>
                            <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                              $11
                            </del>
                          </div>
                          <button
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full" />
        <footer className="lg:hidden fixed z-30 bottom-0 bg-emerald-500 flex items-center justify-between w-full h-16 px-3 sm:px-10">
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
          <a
            className="text-xl text-white"
            rel="noreferrer"
            aria-label="Home"
            href="/"
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
          </a>
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
            <a
              className="leading-none font-bold font-serif block"
              href="/user/dashboard"
            >
              J
            </a>
          </button>
        </footer>
        <div className="w-full">
          <div
            id="downloadApp"
            className="bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden"
          >
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-3 items-center">
                <div className="flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-start">
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
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27500%27%20height=%27394%27/%3e"
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
                      alt="app download"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                    <noscript />
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-3">
                    Get Your Daily Needs From Our KachaBazar Store
                  </h3>
                  <p className="text-base opacity-90 leading-7">
                    There are many products you will find our shop, Choose your
                    daily necessary product from our KachaBazar shop and get some
                    special offer.
                  </p>
                  <div className="mt-8">
                    <a
                      className="mx-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.apple.com/app-store/"
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27170%27%20height=%2750%27/%3e"
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
                          alt="app store"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                          decoding="async"
                          data-nimg="intrinsic"
                          className="mr-2 rounded"
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
                        <noscript />
                      </span>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://play.google.com/store/apps"
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27170%27%20height=%2750%27/%3e"
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
                          alt="app store"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                          decoding="async"
                          data-nimg="intrinsic"
                          className="rounded"
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
                        <noscript />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="md:hidden lg:block">
                  <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
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
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27500%27%20height=%27394%27/%3e"
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
                        alt="app download"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                      <noscript />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
              <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
                <div className="mr-3">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-4 w-4 text-emerald-600"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={1} y={3} width={15} height={13} />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div className="">
                  <span className="block font-serif text-sm font-medium leading-5">
                    Free Shipping From $500.00
                  </span>
                </div>
              </div>
              <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
                <div className="mr-3">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-4 w-4 text-emerald-600"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="">
                  <span className="block font-serif text-sm font-medium leading-5">
                    Support 24/7 At Anytime
                  </span>
                </div>
              </div>
              <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
                <div className="mr-3">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-4 w-4 text-emerald-600"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                    <line x1={1} y1={10} x2={23} y2={10} />
                  </svg>
                </div>
                <div className="">
                  <span className="block font-serif text-sm font-medium leading-5">
                    Secure Payment Totally Safe
                  </span>
                </div>
              </div>
              <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
                <div className="mr-3">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-4 w-4 text-emerald-600"
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
                </div>
                <div className="">
                  <span className="block font-serif text-sm font-medium leading-5">
                    Latest Offer Upto 20% Off
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="border-t border-gray-100 w-full">
            <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
                  <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                    <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                      Company
                    </h3>
                    <ul className="text-sm flex flex-col space-y-3">
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/about-us"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/contact-us"
                        >
                          Contact us
                        </a>
                      </li>
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/#"
                        >
                          Careers
                        </a>
                      </li>
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/#"
                        >
                          Latest news
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                    <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                      Top Category
                    </h3>
                    <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/search?Category=fish--meat"
                        >
                          Fish &amp; Meat
                        </a>
                      </li>
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/search?Category=drinks"
                        >
                          Soft Drinks
                        </a>
                      </li>
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/search?Category=baby-care"
                        >
                          Baby Care
                        </a>
                      </li>
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/search?Category=beauty--health"
                        >
                          Beauty &amp; Health
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                    <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                      My Account
                    </h3>
                    <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/user/dashboard"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/user/my-orders"
                        >
                          My Orders
                        </a>
                      </li>
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/user/dashboard"
                        >
                          Recent Orders
                        </a>
                      </li>
                      <li className="flex items-baseline">
                        <a
                          className="text-gray-600 inline-block w-full hover:text-emerald-500"
                          href="/user/update-profile"
                        >
                          Updated Profile
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                    <a
                      className="mr-3 lg:mr-12 xl:mr-12"
                      rel="noreferrer"
                      href="/"
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
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
                        <noscript />
                      </span>
                    </a>
                    <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
                      <span>
                        987 Andre Plain Suite High Street 838, <br /> Lake
                        Hestertown, USA
                      </span>
                      <br />
                      <span>Tell: 02.356.1666</span>
                      <br />
                      <span>Email: ccruidk@test.com</span>
                    </p>
                  </div>
                </div>
                <hr className="hr-line" />
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
                    <div className="col-span-1">
                      <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                        Follow Us
                      </span>
                      <ul className="text-sm flex">
                        <li className="flex items-center mr-3 transition ease-in-out duration-500">
                          <a
                            aria-label="Social Link"
                            rel="noreferrer"
                            target="_blank"
                            className="block text-center mx-auto text-gray-500 hover:text-white"
                            href="https://www.facebook.com"
                          >
                            <svg viewBox="0 0 64 64" width={34} height={34}>
                              <circle cx={32} cy={32} r={31} fill="#3b5998" />
                              <path
                                d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center mr-3 transition ease-in-out duration-500">
                          <a
                            aria-label="Social Link"
                            rel="noreferrer"
                            target="_blank"
                            className="block text-center mx-auto text-gray-500 hover:text-white"
                            href="https://twitter.com"
                          >
                            <svg viewBox="0 0 64 64" width={34} height={34}>
                              <circle cx={32} cy={32} r={31} fill="#00aced" />
                              <path
                                d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center mr-3 transition ease-in-out duration-500">
                          <a
                            aria-label="Social Link"
                            rel="noreferrer"
                            target="_blank"
                            className="block text-center mx-auto text-gray-500 hover:text-white"
                            href="https://www.pinterest.com"
                          >
                            <svg viewBox="0 0 64 64" width={34} height={34}>
                              <circle cx={32} cy={32} r={31} fill="#cb2128" />
                              <path
                                d="M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center mr-3 transition ease-in-out duration-500">
                          <a
                            aria-label="Social Link"
                            rel="noreferrer"
                            target="_blank"
                            className="block text-center mx-auto text-gray-500 hover:text-white"
                            href="https://www.linkedin.com"
                          >
                            <svg viewBox="0 0 64 64" width={34} height={34}>
                              <circle cx={32} cy={32} r={31} fill="#007fb1" />
                              <path
                                d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center mr-3 transition ease-in-out duration-500">
                          <a
                            aria-label="Social Link"
                            rel="noreferrer"
                            target="_blank"
                            className="block text-center mx-auto text-gray-500 hover:text-white"
                            href="https://www.whatsapp.com"
                          >
                            <svg viewBox="0 0 64 64" width={34} height={34}>
                              <circle cx={32} cy={32} r={31} fill="#25D366" />
                              <path
                                d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-1 text-center hidden lg:block md:block">
                      <p className="text-base leading-7 font-medium block">
                        Call Us Today!
                      </p>
                      <h5 className="text-2xl font-bold text-emerald-500 leading-7">
                        +012345-67900
                      </h5>
                    </div>
                    <div className="col-span-1 hidden lg:block md:block">
                      <ul className="lg:text-right">
                        <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
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
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27274%27%20height=%2785%27/%3e"
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
                              alt="payment method"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                              decoding="async"
                              data-nimg="intrinsic"
                              className="w-full"
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
                            <noscript />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
                <p className="text-sm text-gray-500 leading-6">
                  Copyright 2022 @{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500"
                    href="https://themeforest.net/user/htmllover"
                  >
                    HtmlLover
                  </a>
                  , All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
