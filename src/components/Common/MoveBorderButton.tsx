import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";

const MoveBorderButton = ({ text, redirect }) => {
  return (
    <Link href={redirect} >
      <Button
        borderRadius="1.75rem"
        borderClassName="radial-gradient(var(--green-400) 40%, transparent 60%)"
        className=" w-52 inline-block rounded-full bg-black px-0 py-3 text-base font-semibold text-white duration-300 ease-in-out dark:bg-white/0 dark:text-white dark:hover:bg-dark/80"
      >
        {text}
      </Button>
    </Link>
  );
}

export default MoveBorderButton;