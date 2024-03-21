"use client";

import { Button } from "@/components/ui/button";
import { ListWrapper } from "./list-wrapper";
import { Plus, X } from "lucide-react";

import{useState, useRef, ElementRef} from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { FormInput } from "@/components/form/form-input";
import { useParams, useRouter } from "next/navigation";
import { FormSubmit } from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";
import { createList } from "@/actions/create-list";
import { toast } from "sonner";



export const ListForm =() => {
  const router = useRouter();
  const params = useParams();
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  
  const [isEditing, setIsEditing] = useState(false);

  const enableListEditing = ()=> {
    setIsEditing(true);
    setTimeout(()=>{
      inputRef.current?.focus();
    });
  };

  const disableListEditing = ()=>{
    setIsEditing(false);
  };

  const {execute, fieldErrors} = useAction(createList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" created`);
      disableListEditing();
      router.refresh();
    },
    onError: (error)=>{
      toast.error(error);
    }
  })

  const onKeyDown = (e: KeyboardEvent)=>{
    if(e.key === "Escape"){
      disableListEditing();
    };
  };

  useEventListener("keydown", onKeyDown);
  useOnClickOutside(formRef, disableListEditing);

  const onSubmit =(formData: FormData)=>{
    const title = formData.get("title") as string;
    const boardId = formData.get("boardId") as string;

    execute({
      title,
      boardId,
    });
  }
  if(isEditing){
    return(
      <ListWrapper>
        <form
          ref={formRef}
          className="w-full 
            p-3 
            rounded-md 
            bg-white 
            space-y-4 
            shadow-md" 
            action={onSubmit}
        >
          <FormInput
            ref={inputRef}
            errors={fieldErrors}
            id="title"
            className="text-sm 
              px-2 
              py-1 
              h-7 
              front-medium 
              boarder-transparent 
              hover:border-input 
              focus:border-input 
              transition"
            placeholder="Enter list title"
          />
          <input 
            hidden
            value={params.boardId}
            name="boardId" 
          />
          <div className="flex items-center gap-x-1">
            <FormSubmit
              className="bg-black hover:bg-neutral-500"
            >
              Add list
            </FormSubmit>
            <Button
              onClick={disableListEditing}
              size="sm"
              className="bg-black hover:bg-neutral-500"
            >
              <X 
                className="h-4 w-4"/>
            </Button>
          </div>
        </form>
      </ListWrapper>
    )
  }

  return(
    <ListWrapper>
      <Button
        onClick={enableListEditing}
        className="w-full 
          rounded-md 
          bg-white/80 
          hover:bg-white/50
          transition
          p-3
          flex
          items-center
          font-medium
          text-sm
          text-black"
        >
          <Plus 
            className="h-4 w-4 mr-2"/>
          add a list
        </Button>
    </ListWrapper>
  )
}