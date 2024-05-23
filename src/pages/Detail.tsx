import { useState } from "react";
import DetailSidebar from "../components/DetailSidebar";
import Modal from "../components/Modal";
import loan from "../assets/images/loan.png";
import empty from "../assets/images/background.png";
import brain from "../assets/images/brain.png";
import plane from "../assets/icons/paperplane.svg";
import book from "../assets/icons/book.svg";
import medal from "../assets/icons/medal.svg";
import { UserProfile } from "../components/UserProfile";
import cube from "../assets/icons/cube.svg";
import alert from "../assets/icons/alert.svg";
import { Progress } from "../components/Progress";
import { useNavigate } from "react-router-dom";

export const Detail = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const onClose = () => {
    setShow(false);
  };

  return (
    <div className="flex h-screen bg-[#F2F2F2]">

      <DetailSidebar />
      <div className="grid grid-cols-2 grow">
        <div className="flex flex-col justify-between p-[30px]">
          <div className=" flex flex-col gap-7">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <img
                  alt="itemimage"
                  src="https://i.postimg.cc/LXt3jp0t/ahmed.png"
                  className="w-12 h-12"
                />
                <div className="flex flex-col gap-1 my-auto">
                  <p className="text-[14px] font-semibold text-[#656F93] leading-normal">
                    Applied By
                  </p>
                  <div className="flex flex-row gap-2">
                    <p className="text-[16px] font-semibold text-[#161719] leading-normal">
                      Ahmed Al Maktoum
                    </p>
                    <p className="text-[16px] font-semibold text-[#161719] leading-normal">
                      |
                    </p>
                    <p className="text-[16px] font-semibold text-[#161719] leading-normal">
                      Cloud Solutions Architect
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <img alt="itemimage" src={loan} className="w-12 h-12 my-auto" />
                <div className="flex flex-col gap-1 my-auto">
                  <p className="text-[14px] font-semibold text-[#656F93] leading-normal">
                    Loan Amount
                  </p>
                  <p className="text-[16px] font-semibold text-[#161719] leading-normal">
                    AED {new Intl.NumberFormat("en-US").format(3000000)}
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-[#B1B7CC] border-dashed" />
          </div>
          <div className="flex flex-col justify-center gap-7">
            <img
              alt="itemimage"
              src={empty}
              className="w-[500px] h-[500px] grayscale mx-auto"
            />
            <p className="text-[18px] text-center font-semibold ">
              There are currently no queries!
              <br />
              You can start your query.
            </p>
          </div>
          <div className="py-[6px] pl-5 pr-[6px] rounded-full bg-white input-shadow flex flex-row gap-2">
            <img alt="itemimage" src={brain} className="w-6 h-6 my-auto" />
            <input
              placeholder="What's in your mind?..."
              className="text-[#656F93c7] text-[18px] leading-[20px] outline-none grow my-auto"
            />
            <button className="p-3 bg-[#4182EB] rounded-full">
              <img alt="itemimage" src={plane} />
            </button>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-[8px]">
          <div className="p-[30px]  flex flex-col gap-[30px] max-h-[calc(100vh-120px)] overflow-auto">
            <div className="p-[18px] flex flex-row gap-[18px] bg-[#fff] border-[1px] rounded-xl border-[#ECECEC] card-shadow">
              <img
                alt="itemimage"
                src={`https://ui-avatars.com/api/?length=2&rounded=true&bold=true&name=Emirates Airlines`}
                className="w-[68px] h-[68px] my-auto"
              />
              <div className="flex flex-col gap-1 my-auto">
                <p className="text-[18px] font-semibold leading-normal ">
                  Emirates Airlines
                </p>
                <p className="text-[16px] font-semibold leading-normal text-[#656F93]">
                  Garhoud, Dubai
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-[#fff] border-[1px] rounded-xl border-[#ECECEC] card-shadow">
              <div className="flex flex-row gap-3 p-5">
                <img alt="itemimage" src={book} className="my-auto" />
                <p className="text-[18px] text-black font-semibold">
                  Description :
                </p>
              </div>
              <hr className="border-[#ececec]" />
              <p className="p-5 text-black text-[16px] leading-[26px]">
                Emirates Airlines is a major airline based in Dubai, United Arab
                Emirates. Founded in 1985, it has grown to become one of the
                largest and most prestigious airlines in the world. Emirates
                operates an extensive network of international flights,
                connecting passengers to over 150 destinations across six
                continents.
              </p>
            </div>
            <div className="flex flex-col bg-[#fff] border-[1px] rounded-xl border-[#ECECEC] card-shadow">
              <div className="flex flex-row gap-3 p-5">
                <img alt="itemimage" src={medal} className="my-auto" />
                <p className="text-[18px] text-black font-semibold">
                  Company Director :
                </p>
              </div>
              <hr className="border-[#ececec]" />
              <div className="grid grid-cols-3 p-5 gap-5">
                <UserProfile
                  name="Rashid Al Qasimi"
                  avatar="https://i.postimg.cc/LXt3jp0t/ahmed.png"
                  location="Garhoud,"
                />
                <UserProfile
                  name="Rashid Al Qasimi"
                  avatar="https://i.postimg.cc/LXt3jp0t/ahmed.png"
                  location="Garhoud,"
                />
                <UserProfile
                  name="Rashid Al Qasimi"
                  avatar="https://i.postimg.cc/LXt3jp0t/ahmed.png"
                  location="Garhoud,"
                />
              </div>
            </div>
            <div className="flex flex-col bg-[#fff] border-[1px] rounded-xl border-[#ECECEC] card-shadow">
              <div className="flex flex-row gap-3 p-5">
                <img alt="itemimage" src={cube} className="my-auto" />
                <p className="text-[18px] text-black font-semibold">
                  Company Shareholder :
                </p>
              </div>
              <hr className="border-[#ececec]" />
              <div className="grid grid-cols-3 p-5 gap-5">
                <UserProfile
                  name="Rashid Al Qasimi"
                  avatar="https://i.postimg.cc/LXt3jp0t/ahmed.png"
                  location="58%"
                />
                <UserProfile
                  name="Rashid Al Qasimi"
                  avatar="https://i.postimg.cc/LXt3jp0t/ahmed.png"
                  location="58%"
                />
                <UserProfile
                  name="Rashid Al Qasimi"
                  avatar="https://i.postimg.cc/LXt3jp0t/ahmed.png"
                  location="58%"
                />
              </div>
            </div>
            <div className="flex flex-col bg-[#fff] border-[1px] rounded-xl border-[#ECECEC] card-shadow">
              <div className="flex flex-row gap-3 p-5">
                <img alt="itemimage" src={book} className="my-auto" />
                <p className="text-[18px] text-black font-semibold">
                  Explanation :
                </p>
              </div>
              <hr className="border-[#ececec]" />
              <p className="p-5 text-black text-[16px] leading-[26px]">
                Emirates Airlines is a major airline based in Dubai, United Arab
                Emirates. Founded in 1985, it has grown to become one of the
                largest and most prestigious airlines in the world. Emirates
                operates an extensive network of international flights,
                connecting passengers to over 150 destinations across six
                continents.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[20px] font-semibold text-[#161719]">
                AI-Suggested Risk Management Details :
              </p>
              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col bg-[#fff] border-[1px] rounded-xl border-[#ECECEC] card-shadow">
                  <div className="flex flex-row gap-3 p-5">
                    <img alt="itemimage" src={alert} className="my-auto" />
                    <p className="text-[18px] text-black font-semibold">
                      Company Risk :
                    </p>
                  </div>
                  <hr className="border-[#ececec]" />
                  <div className="p-5 ">
                    <Progress name="Medium Risk" color="#FE734C" value={60} />
                  </div>
                </div>
                <div className="flex flex-col bg-[#fff] border-[1px] rounded-xl border-[#ECECEC] card-shadow">
                  <div className="flex flex-row gap-3 p-5">
                    <img alt="itemimage" src={alert} className="my-auto" />
                    <p className="text-[18px] text-black font-semibold">
                      Director Risk :
                    </p>
                  </div>
                  <hr className="border-[#ececec]" />
                  <div className="p-5 ">
                    <Progress name="Low Risk" color="#42B06F" value={60} />
                  </div>
                </div>
                <div className="flex flex-col bg-[#fff] border-[1px] rounded-xl border-[#ECECEC] card-shadow">
                  <div className="flex flex-row gap-3 p-5">
                    <img alt="itemimage" src={alert} className="my-auto" />
                    <p className="text-[18px] text-black font-semibold">
                      Processing Risk :
                    </p>
                  </div>
                  <hr className="border-[#ececec]" />
                  <div className="p-5 ">
                    <Progress name="High Risk" color="#EB4646" value={60} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 p-[30px]">
            <button className="bg-[#F3F4F7] text-[#656F93] text-[18px] font-semibold rounded-full py-3">Reject Application</button>
            <button onClick={() => navigate('/')} className="bg-[#4182EB] text-[#ffffff] text-[18px] font-semibold rounded-full py-3">Approve Application</button>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onClose={onClose}
        content="Evaluating company, shareholder and director's risk profile. Searching internet for adverse news which may impact risk profile."
      />
    </div>
  );
};

/*

<div className=" bg-[#fff] border-[1px] rounded-xl border-[#ECECEC] card-shadow">

</div>

*/
