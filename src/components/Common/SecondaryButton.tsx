import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";

const SecondaryButton = ({text, redirect})=>{
  return(
    <Link
      className="flex z-50 md:justify-end lg:justify-start xs:justify-center"
      href={redirect}
    >
      <Button
        borderRadius="1.75rem"
        borderClassName="radial-gradient(#0099cb 40%, transparent 60%)"
        className="h-12 w-max rounded-full bg-secondary/60 px-8 text-base font-semibold text-dark duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80 md:grid"
      >
        {text}
      </Button>
    </Link>
  );
}

export default SecondaryButton;