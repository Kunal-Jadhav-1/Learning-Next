"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
// import { useAuth } from "@clerk/nextjs";

export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Counter Compoenent");

  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  // if (!isLoaded || !userId) {
  //   return null;
  // }
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user)
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div>
      <button
        className="bg-white text-black p-2 rounded-full"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tapped {count} times
      </button>
    </div>
  );
};
