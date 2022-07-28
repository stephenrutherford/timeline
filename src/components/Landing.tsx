import type { NextPage } from "next";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Landing: NextPage = () => {
  return (
    <div className="container flex flex-col max-w-7xl items-center gap-6 h-screen justify-center">
      <p className="text-5xl font-bold text-purple-500">Timeline</p>
      <p className="text-2xl font-semibold">Please sign in</p>
      <button
        type="button"
        className="text-purple-500 font-bold px-4 py-2 rounded-full inline-flex items-center gap-2 border-2 border-purple-500 hover:text-purple-400 hover:border-purple-400"
        onClick={() => signIn("discord")}
      >
        <Image
          className=""
          src="/images/discord.svg"
          width={20}
          height={20}
          alt=""
        />
        Sign in with Discord
      </button>
    </div>
  );
};

export default Landing;
