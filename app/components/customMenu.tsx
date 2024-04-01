"use client";

// React
import React, { useEffect, useState } from "react";

// Images
import Image from "next/image";
import Home from "../../public/home.svg";
import Post from "../../public/post.svg";
import History from "../../public/history.svg";

interface MenuItems {
  main: typeof Image;
  post: typeof Image;
  history: typeof Image;
}
const MENU_ITEMS: MenuItems = {
  main: Home,
  post: Post,
  history: History,
};

interface CustomMenuProps {
  status: keyof MenuItems;
}
export default function CustomMenu({ status }: CustomMenuProps) {
  // 메뉴 상태 관리
  const [menuIsOpend, setMenuIsOpend] = useState(false);
  // 메뉴 클릭 시 메뉴 창 인터페이스 변경
  const handleMenuClicked = () => {
    setMenuIsOpend((prevMenuIsOpend) => !prevMenuIsOpend);
  };
  // 현재 사용자 라우트 위치 확인 후 아이콘 변경 상태 관리
  const [currentMenuLocation, setCurrentMenuLocation] = useState(Home);
  useEffect(() => {
    setCurrentMenuLocation(MENU_ITEMS[status]);
  }, [status]);

  return (
    <div
      className={`fixed right-4 bottom-4 flex flex-col justify-around items-center w-12 h-${
        menuIsOpend ? 48 : 12
      } rounded-full bg-white opacity-30 transition-all hover:cursor-pointer`}
      onClick={handleMenuClicked}
    >
      {menuIsOpend ? (
        <>
          <div className="flex justify-center items-center w-6 h-6 rounded-full bg-gray-300"></div>
          <Image src={History} alt="menu_item" />
          <Image src={Post} alt="menu_item" />
          <Image src={Home} alt="menu_item" />
        </>
      ) : (
        <>
          <Image src={currentMenuLocation} alt="menu_item" />
        </>
      )}
    </div>
  );
}
