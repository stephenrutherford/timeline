import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { trpc } from "../utils/trpc";
import { XIcon } from "@heroicons/react/solid";
import useMenuStore from "../stores/menu";
import { Popover } from "@headlessui/react";

type FormData = {
  category_one: string;
  category_two: string;
  category_three: string;
  category_four: string;
  category_five: string;
};

const UserAdjustments: NextPage = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  const closeAdjustmentsMenu = useMenuStore(
    (state) => state.closeAdjustmentsMenu
  );

  return (
    <div className="flex flex-col">
      <div className="form-header">
        <p className="form-title">Header</p>
        <div className="form-close-button" onClick={closeAdjustmentsMenu}>
          <XIcon className="form-icon" />
        </div>
      </div>
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <input
          className="form-text-input border-4 border-red-500 bg-gray-800"
          {...register("category_one")}
          placeholder="Category 1"
        />
        <input
          className="form-text-input border-4 border-green-500 bg-gray-800"
          {...register("category_two")}
          placeholder="Category 2"
        />
        <input
          className="form-text-input border-4 border-blue-500 bg-gray-800"
          {...register("category_three")}
          placeholder="Category 3"
        />
        <input
          className="form-text-input border-4 border-yellow-500 bg-gray-800"
          {...register("category_four")}
          placeholder="Category 4"
        />
        <input
          className="form-text-input border-4 border-cyan-500 bg-gray-800"
          {...register("category_five")}
          placeholder="Category 5"
        />
        <div className="flex flex-col">
          <button
            className="form-submit"
            type="submit"
            //   onClick={() => {
            //     setValue("name", "test title");
            //     setValue("date", "2020-01-01");
            //     setValue("note", "this is a note");
            //     setValue("category", 2);
            //   }}
          >
            Update
          </button>
          <button
            className="form-cancel"
            type="button"
            onClick={() => {
              closeAdjustmentsMenu();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserAdjustments;
