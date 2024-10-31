import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#0E1016] text-[#e4ded7] px-4">
      <Image
        src="/404.gif"
        alt="Page Not Found Illustration"
        width={158}
        height={283}
        className="w-1/5 sm:w-1/5 md:w-1/5 lg:w-1/5"
        priority
      />
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center lowercase">
                Oh no! You seem to be lost here.
      </p>
      <Link
        href="/"
        className="mt-4 inline-block rounded bg-[#e4ded7] px-6 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#0E1016] transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e4ded7] focus:ring-offset-2"
      >
                Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
