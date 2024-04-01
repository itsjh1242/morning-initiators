"use client";
// Auth
import { useSession, signOut } from "next-auth/react";

// Images
import Image from "next/image";
import HeartEmpty from "../../public/heart-empty.svg";
import HeartFill from "../../public/heart-fill.svg";
import Sample from "../../public/sample.jpg";

// Components
// CustomMenu
import CustomeMenu from "../components/customMenu";

export default function Main() {
  return (
    <>
      <main className="flex justify-center overflow-y-auto bg-black">
        {/* <button onClick={() => signOut()} className="absolute left-0 top-0 w-auto h-fit bg-slate-100">
          로그아웃
        </button> */}
        <div className="relative flex flex-col justify-start items-center w-screen max-w-468 min-h-screen bg-black">
          {/* 게시물 카드 */}
          <div className="flex flex-col gap-3 justify-center items-center w-screen max-w-468 h-fit mt-4 mb-4 p-2">
            {/* 게시물 헤더 468x34 */}
            <div className="flex flex-row gap-3 justify-start items-center w-full h-9 pl-2 pr-2">
              <div className="flex justify-center items-center w-11 h-11 rounded-full bg-gray-300"></div>
              <div className="flex flex-col justify-center items-start">
                <p className="text-sm font-bold text-gray-300">NAME</p>
                <p className="text-xs text-gray-300">
                  LOCATION <span className="text-xss text-gray-500">몇분 전</span>
                </p>
              </div>
            </div>
            {/* 게시물 사진 468x585 */}
            <div className="flex justify-center items-center w-full h-585 bg-black">
              <Image className="object-contain bg-center" src={Sample} alt="sample_image" />
            </div>
            {/* 게시물 기능 468x40 */}
            <div className="flex flex-row gap-2 justify-start items-center w-full h-7 pl-2 pr-2">
              <div className="w-5 h-5">
                <Image className="hover:cursor-pointer" src={HeartEmpty} alt="heart_empty" aria-label="좋아요" />
              </div>
              <p className="text-sm font-bold text-gray-300">좋아요 0개</p>
            </div>
          </div>
          <CustomeMenu status="main" />
        </div>
      </main>
    </>
  );
}
