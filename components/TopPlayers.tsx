import React, { useContext } from "react";
import Image from "next/image";

import ApiContext from "../context/api/ApiContext";
import { UiContext } from "../context/ui/UiContext";
import oro from "../public/Oro.png";
import plata from "../public/plata.png";
import trofeo from "../public/trofeo.png";
import Modal from "./Modal";

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
            <div className="w-1/2 flex flex-row justify-between items-center  pr-2">
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
    <Modal handleCloseModal={handleCloseModalTop} title="Top User">
      {userList()}
    </Modal>
  );
};

export default TopPlayers;
