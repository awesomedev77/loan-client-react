// src/components/Sidebar.tsx
import React from "react";
import logo from "../assets/images/logo.png";
import { Accordion } from "./Accordion";
import doc from "../assets/icons/doc.svg";

const DetailSidebar: React.FC = () => {
  return (
    <div className="max-h-screen overflow-auto min-w-[265px] bg-[#151719] shadow-md px-[15px]">
      <div className="flex flex-row justify-center">
        <div className="pt-8 pb-6 flex flex-row gap-3 mx-auto">
          <img src={logo} alt="" className="w-[46px] h-[46px]" />
          <h1 className="text-xl font-bold text-white my-auto">LoanEazy</h1>
        </div>
      </div>
      <hr className="border-[#4E525A] opacity-20 pb-7" />
      <div className="border-dashed border-[#575859] border-[1px] rounded-lg py-7 bg-[#222325]">
        <p className="text-white text-[16px] font-semibold text-center">
          + New Document
        </p>
        <p className="text-[#8C8C8D] text-[14px] text-center">Drop PDF here</p>
      </div>
      <div className="flex flex-col gap-7 pt-7">
        <Accordion header="All Document">
          <div className="pl-3 py-3 flex flex-col gap-1">
            <div className="p-3 flex flex-row gap-2">
              <img src={doc} />
              <p className="text-white text-[16px] my-auto leading-[28px]">
                MOA.pdf
              </p>
            </div>
            <div className="p-3 flex flex-row gap-2">
              <img src={doc} />
              <p className="text-white text-[16px] my-auto leading-[28px]">
                Annual report.pdf
              </p>
            </div>
            <div className="p-3 flex flex-row gap-2">
              <img src={doc} />
              <p className="text-white text-[16px] my-auto leading-[28px]">
                Commercial license.pdf
              </p>
            </div>
            <div className="p-3 flex flex-row gap-2">
              <img src={doc} />
              <p className="text-white text-[16px] my-auto leading-[28px]">
                Trade license.pdf
              </p>
            </div>
          </div>
        </Accordion>
        <Accordion header="Interaction Queries">
          <div className="p-3 pt-[24px] flex flex-col gap-[10px]">
            <p className="text-[#858687] text-[14px] font-bold px-2">
              Previous 7 Days
            </p>
            <div className="bg-[#161719] rounded-lg py-4 px-3">
              <p className="text-white text-[16px] ">Khalid Al Fahim</p>
              <div className="flex flex-row justify-between">
                <p className="text-white text-[12px] font-semibold">
                  Finance Manager
                </p>
                <p className="text-white text-[12px] font-semibold">29 Mar</p>
              </div>
            </div>
            <div className="bg-[#161719] rounded-lg py-4 px-3">
              <p className="text-white text-[16px] ">Khalid Al Fahim</p>
              <div className="flex flex-row justify-between">
                <p className="text-white text-[12px] font-semibold">
                  Finance Manager
                </p>
                <p className="text-white text-[12px] font-semibold">29 Mar</p>
              </div>
            </div>
            <div className="bg-[#161719] rounded-lg py-4 px-3">
              <p className="text-white text-[16px] ">Khalid Al Fahim</p>
              <div className="flex flex-row justify-between">
                <p className="text-white text-[12px] font-semibold">
                  Finance Manager
                </p>
                <p className="text-white text-[12px] font-semibold">29 Mar</p>
              </div>
            </div>
            <p className="text-[#858687] text-[14px] font-bold px-2">
              Feburary
            </p>
            <div className="bg-[#161719] rounded-lg py-4 px-3">
              <p className="text-white text-[16px] ">Khalid Al Fahim</p>
              <div className="flex flex-row justify-between">
                <p className="text-white text-[12px] font-semibold">
                  Finance Manager
                </p>
                <p className="text-white text-[12px] font-semibold">29 Mar</p>
              </div>
            </div>
            <div className="bg-[#161719] rounded-lg py-4 px-3">
              <p className="text-white text-[16px] ">Khalid Al Fahim</p>
              <div className="flex flex-row justify-between">
                <p className="text-white text-[12px] font-semibold">
                  Finance Manager
                </p>
                <p className="text-white text-[12px] font-semibold">29 Mar</p>
              </div>
            </div>
            
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default DetailSidebar;
