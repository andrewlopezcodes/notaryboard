import { Hint } from "@/components/hint";
import { HelpCircle, User2 } from "lucide-react";

export const BoardList =() => {
  return(
    <div className="space-y-4">
      <div className="flex
        items-center
        font-semibold
        text-lg
        text-black"
      >
        <User2 className="h-6 w-6 mr-2" />
        Your Boards
      </div>
        <div className="grid
          grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-4
          gap-4"
        >
          <div 
            role="button"
            className="aspect-video
            relative
            h-full
            w-full
            bg-muted
            rounded-sm
            flex
            flex-col
            gap-y-1
            items-center
            justify-center
            hover:opacity-75
            transition"
          >
            <p className="text-sm">
              Create New Board
            </p>
            <span className="text-xs">
              5 Remaining
            </span>
            <Hint
              sideOffset={40}
              description={`Need More Workspaces? 
                Free workspaces are limited to 5 boards. For unlimited boards upgrade to Pro account.`}>
              <HelpCircle 
                className="absolute 
                  text-black
                  bottom-2
                  right-2
                  h-[14px]
                  w-[14px]"/>
            </Hint>
          </div>
        </div>
    </div>
  );
};