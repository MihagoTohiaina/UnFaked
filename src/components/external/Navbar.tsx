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

export function Navbar() {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  if (isLanding) {
    return (
      <header className="flex justify-between items-center p-4 h-16">
        <div className="text-xl font-bold">YourLogo</div>
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
        <div className="text-xl font-bold">YourLogo</div>
        <nav className="flex gap-4">
          <Link href="/dashboard" className="hover:text-gray-600">
            Dashboard
          </Link>
          <Link href="/projects" className="hover:text-gray-600">
            Projects
          </Link>
        </nav>
      </div>
      <CustomUserMenu />
    </header>
  );
}
