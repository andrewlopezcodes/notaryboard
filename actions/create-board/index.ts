"use server";

import { auth } from "@clerk/nextjs";
import { InputType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const {userId} = auth();

  if(!userId){
    return {
      error: "unauthorized",
    };
  }

const {title} = data;

let board;

try{
  board = await db.board.create({
    data: {
      title,
    }
  });
} catch(error){
    return{
      error: "DB failure. Failed to create"
    }
  }

  revalidatePath(`/board/${board.id}`);
  return {data: board};
};

export const createBoard = createSafeAction(CreateBoard, handler);