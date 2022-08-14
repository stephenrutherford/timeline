import type { NextPage } from "next";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Landing: NextPage = () => {
  return (
    <div className="container flex flex-col max-w-7xl items-center gap-14 h-screen justify-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-5xl font-bold text-brand-quaternary">Timeline</p>
        <p className="text-2xl font-semibold">
          Anim et sunt qui duis fugiat laboris occaecat ex pariatur.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl font-semibold">Please sign in</p>
        <button
          type="button"
          className="text-brand-tertiary font-bold px-4 py-2 rounded-full inline-flex items-center gap-2 border-2 border-brand-tertiary hover:text-purple-400 hover:border-purple-400"
          onClick={() => signIn("discord")}
        >
          <Image
            className="border-white"
            src="/images/discord_2.png"
            width={20}
            height={20}
            alt=""
          />
          Sign in with Discord
        </button>
      </div>
    </div>
  );
};

export default Landing;
