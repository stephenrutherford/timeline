import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { LogoutIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { AdjustmentsIcon } from "@heroicons/react/solid";
import useMenuStore from "../stores/menu";

const UserMenu: NextPage = () => {
  const { data, status } = useSession();

  const toggleAdjustmentsMenu = useMenuStore(
    (state) => state.toggleAdjustmentsMenu
  );

  if (status === "loading") {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!data) {
    // TODO: Route to sign in page
  }

  return (
    <div className="flex flex-row justify-between bg-brand-secondary p-4 rounded-xl items-center">
      <p>
        Signed in as{" "}
        <span className="font-bold text-brand-quaternary">
          {data?.user?.name}
        </span>
      </p>
      <div className="flex flex-row gap-2">
        <button
          className="flex text-white items-center bg-brand-primary p-2 rounded-xl hover:bg-brand-tertiary"
          // onClick={() => signOut()}
        >
          <PlusCircleIcon className="h-6 w-6 text-green-500" />
          {/* Add New Item */}
        </button>
        <button
          className="flex text-white items-center bg-brand-primary p-2 rounded-xl hover:bg-brand-primary"
          onClick={() => toggleAdjustmentsMenu()}
        >
          <AdjustmentsIcon className="h-6 w-6 text-blue-500" />
          {/* Preferences */}
        </button>

        <button
          className="flex text-white items-center bg-brand-primary p-2 rounded-xl hover:bg-brand-primary"
          onClick={() => signOut()}
        >
          {/* Sign out */}
          <LogoutIcon className="h-6 w-6 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
