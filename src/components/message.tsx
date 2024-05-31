import { createRef } from "react";
import { CopyIcon } from "./icons/copy";
import { EditIcon } from "./icons/edit";
import { EllipsisIcon } from "./icons/ellipsis";
import { LikeIcon } from "./icons/like";
import { UnlikeIcon } from "./icons/unlike";
import { MessageIcon } from "./messageIcon";

type props = {
  prompt: string;
  answer?: string;
  editable?: boolean;
  userFullName?: string;
};

export const Message: React.FC<props> = ({
  prompt,
  answer,
  editable,
  userFullName,
}) => {
  return (
    <div className="flex flex-col gap-[10px] relative">
      <div className="flex flex-row gap-2">
        <img
          src={`https://ui-avatars.com/api/?length=2&rounded=true&bold=true&name=${userFullName}`}
          className="w-7 h-7 rounded-full"
        />
        <p className="my-auto text-[#656f93] font-semibold text-[16px] leading-[20px]">
          {prompt}
        </p>
      </div>
      <div className="pl-9 font-semibold text-[16px]">{answer}</div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row pt-[10px] pl-9 gap-3">
          <div className="flex flex-row gap-3 bg-white py-2 px-3 rounded-full">
            <MessageIcon onClick={() => {}} focused={true}>
              <LikeIcon />
            </MessageIcon>
            <div className="w-1 border-r-[1px] border-r-[#656F93] opacity-40 my-[3px]"></div>
            <MessageIcon onClick={() => {}}>
              <UnlikeIcon />
            </MessageIcon>
            <div className="w-1 border-r-[1px] border-r-[#656F93] opacity-40 my-[3px]"></div>
            <MessageIcon onClick={() => {}}>
              <CopyIcon />
            </MessageIcon>
          </div>
          <div className="bg-white rounded-full p-2">
            <MessageIcon onClick={() => {}}>
              <EllipsisIcon />
            </MessageIcon>
          </div>
        </div>
        {editable ? (
          <div className="bg-white rounded-full px-3 py-2">
            <MessageIcon onClick={() => {}}>
              <div className="my-auto">
                <EditIcon />
              </div>
              <p className="pl-2 my-auto leading-[26px]">Regenerate</p>
            </MessageIcon>
          </div>
        ) : (
          ""
        )}
      </div>
      {editable ? (
        <div className="absolute right-0 top-0 bg-white rounded-full p-2">
          <MessageIcon onClick={() => {}}>
            <EditIcon />
          </MessageIcon>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
