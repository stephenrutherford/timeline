import type { NextPage } from "next";
import Image from "next/image";
// import { MouseEventHandler } from "react";
import useMenuStore from "../stores/menu";
// import { trpc } from "../utils/trpc";
import { ItemCardType } from "../types/item";

// interface ItemProps {
//   id: string;
//   date: string;
//   name: string;
//   note: string | null;
//   category: number | null;
//   // onClick: () => void | MouseEventHandler;
// }

const ItemCardContainer: NextPage<ItemCardType> = ({
  id,
  date,
  name,
  note,
  category,
}) => {
  // const setItemId = useMenuStore((state) => state.idToEdit);
  // const idToEdit = useMenuStore((state) => state.idToEdit);
  const updateEditId = useMenuStore((state) => state.updateEditId);

  // const { data } = trpc.useQuery(
  //   ["items.get-selected-item", { id: idToEdit }]
  // );

  // const menuOpen = useMenuStore((state) => state.show);
  const closeEditMenu = useMenuStore((state) => state.closeEditMenu);
  const openEditMenu = useMenuStore((state) => state.openEditMenu);

  return (
    <div className="flex flex-row  h-[200px] w-full border">
      {/* <div className="absolute top-80 left-80">
        <p>{data?.id}</p>
        <p>{data?.name}</p>
      </div> */}
      {/*// ? Left */}
      <div className="flex grow h-full w-full items-center justify-end min-w-[300px]">
        <div className="mr-10">
          <div className="date-bg">
            <p className="date-text">{date}</p>
            {/* <p className="date-text">Jun 07</p> */}
          </div>
        </div>
      </div>
      {/*// ? Middle */}
      <div className="rounded-xl border-4 border-red-500 overflow-hidden grow-0 min-w-[200px]">
        <Image
          src="/images/persona_4.webp"
          width={200}
          height={200}
          alt=""
          onClick={() => {
            updateEditId(id);
            // console.log("clicked on: ", name);
            // refetch();
          }}
        />
      </div>
      {/*// ? Right */}
      <div className="flex flex-col grow h-full w-full justify-center min-w-[300px]">
        <ul className="item-ul">
          <li className="item-name">{name}</li>
          <li className="item-note">{note}</li>
          <li className="text-red-500">{category}</li>
        </ul>
      </div>
    </div>
  );
};

export default ItemCardContainer;
