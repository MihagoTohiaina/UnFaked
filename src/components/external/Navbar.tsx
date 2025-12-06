"use client";

import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import CustomUserMenu from "./CustomUserMenu";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  if (isLanding) {
    return (
      <header className="flex justify-between items-center p-4 h-16">
        <Link href="/">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex items-center gap-4 ">
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <div className="py-5 " >
            <CustomUserMenu></CustomUserMenu>
            </div>

          </SignedIn>
        </div>
      </header>
    );
  }

  return (
    <header className="flex justify-between items-center p-4 h-16 border-b">
      <div className="flex items-center gap-8">
        <Link href="/">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </Link>
      </div>
      <CustomUserMenu />
    </header>
  );
}
