"use client";
// Auth
import { useSession, signIn, signOut } from "next-auth/react";

// Images
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Google from "../../public/google.svg";
import Github from "../../public/github.svg";

export default function Login() {
  const { data, status } = useSession();
  return status !== "authenticated" ? (
    <main className="flex min-h-screen justify-center overflow-hidden bg-gray-900">
      <div className="flex flex-col justify-center items-center">
        <Image src={Logo} alt="logo" width={300} height={300} />
        <h1 className="sm:text-sm lg:text-3xl text-gray-300 font-bold">아침을 여는 사람들</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="relative flex justify-center items-center w-80 h-12 bg-gray-50 rounded mt-12 text-black"
        >
          <Image src={Google} alt="google" className="absolute top-1/2 left-4 -translate-y-1/2" />
          Google 로그인
        </button>
        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="relative flex justify-center items-center w-80 h-12 bg-black rounded mt-2 text-gray-300"
        >
          <Image src={Github} alt="github" className="absolute top-1/2 left-4 -translate-y-1/2" />
          Github 로그인
        </button>
      </div>
    </main>
  ) : (
    <></>
  );
}
