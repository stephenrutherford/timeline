import type { NextPage } from "next";
import Image from "next/image";

interface ItemProps {
  date: string;
  name: string;
  note: string | null;
  category: number | null;
}

const Item: NextPage<ItemProps> = ({ date, name, note, category }) => {
  return (
    <div className="flex flex-row  h-[200px] w-full border">
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
        <Image src="/images/persona_4.webp" width={200} height={200} alt="" />
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

export default Item;
