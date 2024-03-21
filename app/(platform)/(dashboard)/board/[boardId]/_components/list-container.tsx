"use client";

import { ListWithCards } from "@/types";
import { List } from "@prisma/client";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
};

export const ListContainer = ({
  data,
  boardId,
}:ListContainerProps) => {
  return(
    <div>
      List Container
    </div>
  )
}