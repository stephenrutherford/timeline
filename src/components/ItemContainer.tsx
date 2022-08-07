import type { NextPage } from "next";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import Item from "./Item";

// interface ItemProps {
//   name: string;
//   note: string;
//   category: number;
//   date: string;
//   image: string;
// }
const ItemContainer: NextPage = () => {
  const {
    data: latestItems,
    isLoading,
    error,
  } = trpc.useQuery(["items.get-latest-items"]);
  const { data: previousItems } = trpc.useQuery(["items.get-previous-items"]);
  const { data: upcomingItems } = trpc.useQuery(["items.get-upcoming-items"]);

  // const { data: selectedItem } = trpc.useQuery([
  //   "items.get-selected-item",
  //   { id: "cl5sjh4kq001800v2ffg31m21" },
  // ]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="">
        <div className="tag-bg">
          <p className="tag-text">Previous</p>
        </div>
      </div>
      {/* // ! If no items in DB */}
      {!previousItems && <div>No data Found, add one?</div>}
      {previousItems?.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          date={item.date.toLocaleDateString()}
          name={item.name}
          note={item.note}
          category={item.category}
          // size={100}
        />
      ))}
      <div className="">
        <div className="tag-bg">
          <p className="tag-text">Latest</p>
        </div>
      </div>
      {/* // ! If no items in DB */}
      {!latestItems && <div>No data Found, add one?</div>}
      {latestItems?.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          date={item.date.toLocaleDateString()}
          name={item.name}
          note={item.note}
          category={item.category}
          // size={200}
        />
      ))}

      <div className="">
        <div className="tag-bg">
          <p className="tag-text">Upcoming</p>
        </div>
      </div>
      {/* // ! If no items in DB */}
      {!upcomingItems && <div>No data Found, add one?</div>}
      {upcomingItems?.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          date={item.date.toLocaleDateString()}
          name={item.name}
          note={item.note}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ItemContainer;
