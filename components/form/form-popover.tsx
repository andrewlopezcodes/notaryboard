"use client";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";

import { createBoard } from "@/actions/create-board";
import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";

interface FormPopoverProps{
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export const FormPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: FormPopoverProps ) =>{
  const {execute, fieldErrors} = useAction(createBoard,{
    onSuccess: (data)=> {
      console.log({data});
      toast.success("Board Created!!");
    },
    onError: (error)=>{
      console.log({error});
      toast.error(error);
    }
  });

  const onSubmit = (formData: FormData)=>{
    const title = formData.get("title") as string;
    execute({title});
  }

  return(
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div
          className="text-sm
            font-medium
            text-center
            text-black
            pb-4">
              Create Board
            </div>
      <PopoverClose asChild>
        <Button className="h-auto
          w-auto
          p-2
          absolute
          top-2
          right-2
          text-white
          bg-black"
          variant="ghost">
          <X className="h-3 w-3" />
        </Button>
      </PopoverClose>
      <form 
        action={onSubmit}
        className="space-y-4"
      >
        <div className="space-y-4">
          <FormInput 
            id="title"
            label="Board Title"
            type="text"
            errors={fieldErrors}
          />
        </div>
        <FormSubmit className="w-full 
          text-white
          bg-black"
        >
          Create
        </FormSubmit>        
      </form>
      </PopoverContent>
    </Popover>
  );
};