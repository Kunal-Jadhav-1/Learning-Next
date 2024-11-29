"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Navigation = () => {
  console.log("Component rendered");
  const pathname = usePathname();
  console.log("Pathname:", pathname);

  return (
    <nav className="flex justify-center items-center p-4">
      <Link
        href="/"
        className={
          pathname === "/"
            ? " text-cyan-500 p-2"
            : " text-white p-2 rounded-full"
        }
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about"
            ? " text-cyan-500 p-2"
            : " text-white p-2 rounded-full"
        }
      >
        About Us
      </Link>
      <Link
        href="/users-clients"
        className={
          pathname === "/products/Apple"
            ? " text-cyan-500 p-2"
            : " text-white p-2 rounded-full"
        }
      >
        Apples
      </Link>
      <Link
        href="/mock-users"
        className={
          pathname === "/products/Samsung"
            ? " text-cyan-500 p-2"
            : " text-white p-2 rounded-full"
        }
      >
        Oranges
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};
