import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useForm } from "react-hook-form";
import User from "../components/User";

type FormData = {
  date: string;
  name: string;
  note: string | null;
  category: number | null;
};

const Testing: NextPage = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  // * Upload Image
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  // TODO: Add image upload to server
  // const uploadToServer = async (event) => {
  //   const body = new FormData();
  //   body.append("file", image);
  //   const response = await fetch("/api/file", {
  //     method: "POST",
  //     body
  //   });
  // };

  return (
    <div className="">
      <User />
      <div className="flex flex-col text-gray-400 gap-4">
        <form
          className="flex flex-col w-[400px] max-w-[400px]"
          onSubmit={onSubmit}
        >
          <div className="rounded-xl overflow-hidden w-[200px] h-[200px] min-w-[200px] min-h-[200px] grow-0 bg-white">
            <Image
              className="object-cover"
              // src="/images/placeholder-image.png"
              src={image ? createObjectURL : "/images/placeholder-image.png"}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <input
            className="file:bg-blue-500 file:hover:bg-blue-700 file:text-white file:font-bold file:py-2 file:px-4 file:rounded-xl"
            type="file"
            id=""
            name=""
            onChange={uploadToClient}
          />
          <label>Name</label>
          <input {...register("name")} />
          <label>Date</label>
          <input type="date" {...register("date")} />
          <label>Note</label>
          <textarea {...register("note")} />
          <label>Category</label>
          <select {...register("category")}>
            <option value={1} label="Category 1" />
            <option value={2} label="Category 2" />
            <option value={3} label="Category 3" />
            <option value={4} label="Category 4" />
            <option value={5} label="Category 5" />
          </select>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => {
              setValue("name", "test title");
              setValue("date", "2020-01-01");
              setValue("note", "this is a note");
              setValue("category", 2);
            }}
          >
            SetValue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Testing;
