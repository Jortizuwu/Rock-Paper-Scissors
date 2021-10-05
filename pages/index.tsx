import type { NextPage } from "next";
import { useContext } from "react";
import Image from "next/image";

import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Results from "../components/Results";
import Score from "../components/Score";
import SelectUser from "../components/SelectUser";
import ScoreContext from "../context/score/ScoreContext";
import { UiContext } from "../context/ui/UiContext";

import rules from "../public/image-rules.svg";
import TopPlayers from "../components/TopPlayers";

const Home: NextPage = () => {
  const { valUser } = useContext(ScoreContext);
  const { modalOpen, viewTopPlayer, handleCloseModal } = useContext(UiContext);

  return (
    <div>
      <Layout>
        <Score />
        {valUser ? <Results /> : <SelectUser />}
      </Layout>
      {modalOpen && (
        <Modal>
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Rules</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={handleCloseModal}
            >
              <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                X
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="my-4 text-gray-500 text-lg leading-relaxed flex justify-center">
              <Image src={rules} alt="rules" />
            </div>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
            <button
              onClick={handleCloseModal}
              className="text-purple-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
      {viewTopPlayer && (
        <Modal>
          <TopPlayers />
        </Modal>
      )}
    </div>
  );
};

export default Home;
