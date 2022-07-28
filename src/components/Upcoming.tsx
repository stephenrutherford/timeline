import type { NextPage } from "next";
import Image from "next/image";
import { trpc } from "../utils/trpc";

// interface ItemProps {
//   name: string;
//   note: string;
//   category: number;
//   date: string;
//   image: string;
// }
const Upcoming: NextPage = () => {
  const {
    data: test,
    isLoading,
    error,
  } = trpc.useQuery(["upcoming.get-upcoming-items"]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="">
        <div className="tag-bg">
          <p className="tag-text">Upcoming</p>
        </div>
      </div>
      {/* // ! If no items in DB */}
      {!test && <div>No data Found, add one?</div>}
      {test?.map((item) => (
        <div key={item.id} className="flex flex-row  h-[200px] w-full border">
          {/*// ? Left */}
          <div className="flex grow h-full w-full items-center justify-end min-w-[300px]">
            <div className="mr-10">
              <div className="date-bg">
                <p className="date-text">{item.date.toLocaleDateString()}</p>
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
            />
          </div>
          {/*// ? Right */}
          <div className="flex flex-col grow h-full w-full justify-center min-w-[300px]">
            <ul className="item-ul">
              <li className="item-name">{item.name}</li>
              <li className="item-note">{item.note}</li>
              <li className="text-red-500">{item.category}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
