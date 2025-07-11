"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { FaX } from "react-icons/fa6";
import { toast } from "sonner";

import { TextArea, TextField } from "@/app/_components/global/Input";
import { H3 } from "@/app/_components/global/Text";

import FormButton from "./part/SubmitButton";
import { TwibbonWithUser } from "@/types/entityRelations";
import Image from "@/app/_components/global/Image";
import { upsertTwibbon } from "@/actions/twibbon";
// import { fileSizeToMb } from "@/utils/atomics";

export default function Modal({
  setIsOpenModal,
  data,
}: {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  data?: TwibbonWithUser | null;
}) {
  const [image, setImage] = useState(data?.frame_url);

  async function update(formdata: FormData) {
    const toastId = toast.loading("Loading...");
    try {
      const frameUrl = formdata.get("frame_url") as File;

      if (frameUrl.name === "") formdata.delete("frame_url");
      // else {
      //   const fileSize = fileSizeToMb(frameUrl.size);
      //   if (fileSize > 4.3)
      //     toast.error("File terlalu besar! Ukuran maximum 4,3 MB", {
      //       id: toastId,
      //     });
      // }

      const result = await upsertTwibbon(data?.id as string, formdata);
      if (result?.success) {
        toast.success(result.message, { id: toastId });
        setIsOpenModal(false);
      } else toast.error(result.message, { id: toastId });
    } catch (e) {
      console.error(e);
      toast.error("File terlalu besar! Ukuran maximum 4,3 MB", { id: toastId });
    }
  }

  return (
    <div className="bg-gray-300/50 fixed w-full lg:w-[calc(100%-20rem)] z-10 justify-center items-center top-0 right-0 h-full m-auto overflow-y-scroll">
      <div className="relative p-4 w-full h-full max-w-2xl max-h-full m-auto top-20">
        <div className="relative bg-white rounded-lg">
          <form action={update}>
            <div className="flex items-center justify-between p-4 md:p-5 border-b">
              <H3>Twibbon Data</H3>
              <button
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition-all"
                onClick={() => setIsOpenModal(false)}
              >
                <FaX size={16} />
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <TextField
                type="text"
                name="title"
                required
                value={data?.title}
                label="Title"
                placeholder="MPLS Angkatan XX"
              />
              <div className="flex flex-col-reverse">
                <input
                  type="file"
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files![0]));
                  }}
                  accept="image/png"
                  name="frame_url"
                  required={!data?.frame_url}
                  className="border border-neutral-500 peer border-dotted rounded-xl py-5 px-3"
                />
                <label
                  htmlFor="thumbnail"
                  className="peer-required:after:text-red-500 peer-required:after:content-['*']"
                >
                  Frame
                </label>
                {image && (
                  <Image
                    className="w-[200px] h-[200px] rounded-2xl object-cover mb-2"
                    width={100}
                    height={100}
                    alt="Frame"
                    src={image}
                    unoptimized
                  />
                )}
              </div>
              <TextArea
                name="caption"
                value={data?.caption || undefined}
                label="Caption Template"
              />
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-end">
              <FormButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
