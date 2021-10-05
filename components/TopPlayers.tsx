import React, { useContext } from "react";
import Image from "next/image";

import ApiContext from "../context/api/ApiContext";
import { UiContext } from "../context/ui/UiContext";
import oro from "../public/Oro.png";
import plata from "../public/plata.png";
import trofeo from "../public/trofeo.png";

const imgs = [trofeo, oro, plata];

const TopPlayers = () => {
  const { top } = useContext(ApiContext);
  const { handleCloseModalTop } = useContext(UiContext);

  const userList = () => {
    return (
      <>
        {top?.usuarios.slice(0, 10).map((user, idx) => (
          <div
            className=" bg-white w-full mx-auto rounded px-6 py-2 flex felx-row justify-between "
            key={user.uid}
          >
            <div className="w-1/3 flex flex-row justify-between items-center  pr-2">
              <div className="h-10">
                {idx <= 2 ? (
                  <Image src={imgs[idx]} height="40" width="40" alt="uwu" />
                ) : (
                  <div className="h-10 w-10 bg-white text-center text-2xl font-bold">
                    {idx + 1}
                  </div>
                )}
              </div>
              <div className="text-lg capitalize font-semibold">
                {user.nombre}
              </div>
            </div>
            <div className="text-lg capitalize font-semibold w-2/3 flex flex-col justify-center items-end">
              <p className="bg-blue-100 w-1/4 text-center rounded-lg">
                {user.puntaje}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="bg-white rounded-lg">
      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
        <h3 className="text-3xl font-semibold text-center text-blue-400 uppercase">
          Top Players
        </h3>
        <button
          className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={handleCloseModalTop}
        >
          <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
            X
          </span>
        </button>
      </div>
      {userList()}
      <div className="flex items-center justify-end p-4 border-t border-solid border-gray-200 rounded-b">
        <button
          onClick={handleCloseModalTop}
          className="text-purple-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TopPlayers;
