import type { NextPage } from "next";
import { Popover } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

function MyPopover() {
  return (
    <Popover className="text-white">
      {({ open }) => (
        <>
          <Popover.Button>
            <span>Solutions</span>
            <ChevronRightIcon
              className={`${open ? "rotate-90 transform" : ""}`}
            />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 top-40 left-10">
            <div className="grid grid-cols-2">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </div>
          </Popover.Panel>{" "}
        </>
      )}
    </Popover>
  );
}

export default MyPopover;
