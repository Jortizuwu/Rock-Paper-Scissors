import type { NextPage } from "next";
import { useContext } from "react";

import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Results from "../components/Results";
import Score from "../components/Score";
import SelectUser from "../components/SelectUser";
import ScoreContext from "../context/score/ScoreContext";
import { UiContext } from "../context/ui/UiContext";

const Home: NextPage = () => {
  const { valUser } = useContext(ScoreContext);
  const { modalOpen } = useContext(UiContext);

  return (
    <div>
      <Layout>
        <Score />
        {valUser ? <Results /> : <SelectUser />}
      </Layout>
      {modalOpen && <Modal />}
    </div>
  );
};

export default Home;
