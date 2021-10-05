import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScoreState from "../context/score/ScoreState";
import UiState from "../context/ui/UiState";
import ApiState from "../context/api/ApiState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiState>
      <ScoreState>
        <UiState>
          <Component {...pageProps} />
        </UiState>
      </ScoreState>
    </ApiState>
  );
}
export default MyApp;
