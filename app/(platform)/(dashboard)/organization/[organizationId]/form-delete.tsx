"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const FormDelete = () => {
  const {pending} = useFormStatus();
  return(
    <Button 
      disabled={pending}
      type="submit" 
      size="sm" 
      className="text-xs-black 
        h-5 
        bg-slate-200 
        hover:text-slate-50">
        Delete
      </Button>
  );
};