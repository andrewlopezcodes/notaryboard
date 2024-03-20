import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import {notFound, redirect } from "next/navigation";

export async function generateMetadata({
  params
}: {
  params: {
    boardId: string;
  }
}) {
  const {orgId} = auth();

  if(!orgId){
    return {
      title: "Board",
    }
  }

  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId
    }
  });

  return {
    title: board?.title || "Board",
  };
}

 const BoardIdLayout = async ({
  children,
  params,
 }: {
  children: React.ReactNode;
  params: {boardId: string;};
 }) => {
  const { orgId } = auth();

  if(!orgId){
    redirect("/select-org");
  }

  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId,
    },
  });

  if(!board){
    notFound();
  }
  return (
    <>
    <div
      style={{
        zIndex: -1,
        position:"fixed",
        width:"100vw",
        height: "100vh",
    }}>
      <Image
        src={board.imageFullUrl}
        alt="background Image"
        layout="fill"
        objectFit='cover'
        />
        <main
          className="relative pt-28 h-full">
          {children}
        </main>     
      </div>
    </>
    
  );
 };

 export default BoardIdLayout;