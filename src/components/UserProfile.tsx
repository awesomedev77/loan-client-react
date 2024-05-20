type props = {
  name: string;
  location: string;
  avatar: string;
};

export const UserProfile: React.FC<props> = ({ name, location, avatar }) => {
  return (
    <div className="p-[18px] flex flex-row gap-3 bg-[#fff] border-[1px] rounded-xl border-[#ECECEC] card-shadow">
      <img
        src={avatar}
        className="w-12 h-12"
      />
      <div className="flex flex-col gap-1 my-auto">
        <p className="text-[16px] font-semibold leading-normal ">
          {name}
        </p>
        <p className="text-[14px] font-semibold leading-normal text-[#656F93]">
          {location}
        </p>
      </div>
    </div>
  );
};
