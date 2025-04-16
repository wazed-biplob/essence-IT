import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />

      <footer className="bg-slate-700">
        <div className="mx-auto grid text-gray-50 lg:grid-cols-12">
          <div className="px-5 py-8 sm:px-8 md:pt-14 lg:col-span-5 xl:pr-32 2xl:pr-40">
            <p className="font-medium text-orange-500">Subscribe</p>
            <p className="mb-4 mt-4 text-2xl sm:mb-8 sm:text-5xl"></p>
            <div className="flex max-w-lg rounded-full bg-white ring-orange-300 focus-within:ring">
              <input
                className="w-full rounded-full px-6 text-gray-600 outline-none md:px-10"
                type="email"
                placeholder="Enter your email"
              />
              <button className="rounded-full bg-orange-600 p-2 ring-orange-300 focus:ring active:scale-105 md:p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap border-t border-r border-slate-500 px-5 pb-10 sm:py-8 sm:px-8 lg:col-span-7 lg:border-t-0 xl:flex-nowrap xl:space-x-16 xl:pl-32 2xl:pl-40"
          >
            <ul className="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
              <li>
                <strong>Resources</strong>
              </li>
              <li>
                <Link href="#"> Why Us? </Link>
              </li>
              <li>
                <Link href="#"> Blog </Link>
              </li>
              <li>
                <Link href="#"> Customer Service </Link>
              </li>
              <li>
                <Link href="#"> Guides </Link>
              </li>

              <li>
                <Link href="#"> Marketing </Link>
              </li>
              <li>
                <Link href="#"> Media </Link>
              </li>
            </ul>
            <ul className="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
              <li>
                <Link href=""> Customer Service </Link>
              </li>
              <li>
                <Link href=""> Guides </Link>
              </li>

              <li>
                <Link href=""> Media </Link>
              </li>
            </ul>
            <ul className="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
              <li>
                <strong>Guides</strong>
              </li>
              <li>
                <Link href=""> Why Us? </Link>
              </li>
              <li>
                <Link href=""> Blog </Link>
              </li>

              <li>
                <Link href=""> Marketing </Link>
              </li>
              <li>
                <Link href=""> Media </Link>
              </li>
            </ul>
          </nav>
          <div className="border-t border-slate-500 py-4 lg:col-span-12">
            <p className="text-center text-sm text-gray-400">
              &copy; 2023 Essence IT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
