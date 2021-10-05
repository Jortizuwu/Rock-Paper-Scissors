import React, { useContext } from "react";
import ApiContext from "../context/api/ApiContext";

const InfoUser = () => {
  const { user } = useContext(ApiContext);

  return (
    <>
      {user && (
        <div className="w-full lg:w-9/12 mx-auto bg-white rounded-md mb-4 px-2 py-1">
          <div className="flex justify-between">
            <div className="w-1/2 uppercase font-bold">{user?.nombre}</div>
            <div className="w-1/2 uppercase font-semibold">
              You best score:
              <span className="text-blue-500 font-bold ml-0.5">
                {user?.puntaje}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoUser;
