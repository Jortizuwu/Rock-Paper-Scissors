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
    <>
      <Layout>
        <Score />
        {valUser ? <Results /> : <SelectUser />}
      </Layout>
      {modalOpen && (
        <Modal handleCloseModal={handleCloseModal} title="Rules 1">
          <div className="relative p-6 flex-auto">
            <div className="my-4 text-gray-500 text-lg leading-relaxed flex justify-center">
              <Image src={rules} alt="rules" />
            </div>
          </div>
        </Modal>
      )}
      {viewTopPlayer && <TopPlayers />}
    </>
  );
};

export default Home;
