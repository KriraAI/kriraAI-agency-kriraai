import Link from "next/link";
import React from "react";

interface HoverColorBtnProps {
  text: string;
  redirect: string;
  query?: string; 
}

const HoverColorBtn: React.FC<HoverColorBtnProps> = ({ text, redirect, query }) => {
  return (
    <Link
      className="flex xs:justify-center md:justify-start items-center"
      href={{ pathname: redirect, ...(query && { query }) }} 
    >
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full" />
        <div
          className="xs:px-24 xxs:py-3 xxs:px-12 xs:py-3 md:px-12 md:py-2 bg-total-black rounded-full relative group transition duration-200 text-white hover:bg-transparent"
        >
          {text}
        </div>
      </button>
    </Link>
  );
}

export default HoverColorBtn;
