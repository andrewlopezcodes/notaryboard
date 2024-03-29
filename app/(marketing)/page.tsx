import Link from "next/link";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import {Medal} from "lucide-react";

import {cn} from "@/lib/utils";
import {Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = Roboto({
  subsets: ['latin'],
  weight: [
    "100",
    "300",
    "400",
    "500",
    "700",
    "900"
  ],
})

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn("flex items-center justify-center flex-col",
        headingFont.className,
        )}>
        <div className="mb-4 flex 
          items-center 
          border 
          shadow-sm 
          p-4 
          bg-amber-100 
          text-amber-700 
          rounded-full 
          uppercase">
          <Medal className="b-6 w-6 mr-2"/>
          No 1 task management
        </div>
        <h1 className="text-3xl
          md:text-6xl
          text-center
          text-neutral-800
          mb-6">
            Clipboard helps notaries move
        </h1>
        <div className="text-3xl 
          md:text-6xl
          bg-gradient-to-r
          from-gray-700
          to-gray-400
          text-white
          px-4 
          pt-4 
          rounded-md 
          pb-4 
          w-fit">
            notarizations forward
        </div>
      </div>
      <div className={cn(
        "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
        textFont.className,
      )}>
        Collaborate, manage notarizations, and reach new productivity peaks. 
        From the office, to mobile notarizations, stay organized with Clipboard. 
      </div>
      <Button className="mt-6 bg-black" size="lg" asChild>
        <Link href="/sign-up">
          Get Clipboard for free
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;