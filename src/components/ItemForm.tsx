import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useForm } from "react-hook-form";
import User from "../components/User";
import { XIcon } from "@heroicons/react/solid";
import useMenuStore from "../stores/menu";
import { trpc } from "../utils/trpc";

type FormData = {
  date: string;
  name: string;
  note: string | null;
  category: number | null;
};

const ItemForm: NextPage = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  // * States
  const closeEditMenu = useMenuStore((state) => state.closeEditMenu);
  const idToEdit = useMenuStore((state) => state.idToEdit);

  const utils = trpc.useContext();

  const { data, isLoading } = trpc.useQuery([
    "items.get-selected-item",
    { id: idToEdit },
  ]);

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

  //   TODO: Add image upload to server
  // const uploadToServer = async (event) => {
  //   const body = new FormData();
  //   body.append("file", image);
  //   const response = await fetch("/api/file", {
  //     method: "POST",
  //     body
  //   });
  // };

  //   open(false);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <p>No data found. Please try again.</p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col text-gray-400 gap-4 bg-gray-800 rounded-xl p-4
      "
    >
      <div className="text-white">
        <ul>
          {/* <li>{data?.id}</li>
          <li>{data?.date.toLocaleDateString()}</li>
          <li>{data?.name}</li>
          <li>{data?.note}</li>
          <li>{data?.category}</li> */}
          {/* <li>{data?.image}</li> */}
        </ul>
      </div>

      <div className="form-header">
        <p className="form-title">Header</p>
        <div className="form-close-button" onClick={closeEditMenu}>
          <XIcon className="form-icon" />
        </div>
      </div>
      <form className="form-container" onSubmit={onSubmit}>
        <div className="form-img-parent">
          <Image
            className="form-img"
            // src="/images/placeholder-image.png"
            src={image ? createObjectURL : "/images/placeholder-image.png"}
            width={200}
            height={200}
            alt=""
          />
        </div>
        <input
          className="form-upload-input"
          type="file"
          id=""
          name=""
          onChange={uploadToClient}
        />
        <label className="form-text-label">Name</label>
        <input
          className="form-text-input"
          {...register("name", { required: true })}
          // placeholder={data.name}
          defaultValue={data.name}
        />

        <p className="form-error">
          {errors.name?.type === "required" && "Name is required"}
        </p>
        <label className="form-text-label">Date</label>
        <input className="form-text-input" type="date" {...register("date")} />
        <label className="form-text-label">Note</label>
        <textarea className="form-text-input" {...register("note")} />
        <label className="form-text-label">Category</label>
        <select className="form-text-input" {...register("category")}>
          <option value={1} label="Category 1" />
          <option value={2} label="Category 2" />
          <option value={3} label="Category 3" />
          <option value={4} label="Category 4" />
          <option value={5} label="Category 5" />
        </select>
        <button
          className="form-submit"
          type="button"
          onClick={() => {
            setValue("name", "test title");
            setValue("date", "2020-01-01");
            setValue("note", "this is a note");
            setValue("category", 2);
          }}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
