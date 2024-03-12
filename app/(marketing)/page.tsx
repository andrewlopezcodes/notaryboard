import {Medal} from "lucide-react";
const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
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
            NotaryBoard helps notaries move
        </h1>
        <div className="text-3xl 
          md:text-6xl
          bg-gradient-to-r
          from-gray-700
          to-gray-400
          text-white
          px-4 
          p-2 
          rounded-md 
          pb-4 
          w-fit">
            notarizations forward
        </div>
      </div>
      <div className="text-sm
      md:text-xltext-neutral-400
      mt-4
      max-w-xs
      md:max-w-2xl
      text-center
      mx-auto">Collaborate, manage notarizations, and reach new productivity peaks. 
        From the office, to mobile notarizations, stay organized with NotaryBoard. </div>
    </div>
  );
};

export default MarketingPage;