import Link from "next/link";
import React from "react";

export const Header = ({ font }: { font?: string }) => {
  return (
    <header className='py-2 bg-gray-951 dark:bg-gray-952 '>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <Link
          className='uppercase text-yellow-500 text-center'
          href={"/"}
        >
          Bidder Sweet
        </Link>
        <Link
          className='uppercase text-green-951 text-xl hover:text-yellow-700'
          href={"/products/upload"}
        >
          Upload {"🗃️"}
        </Link>
      </div>
    </header>
  );
};
