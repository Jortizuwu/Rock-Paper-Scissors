import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScoreState from "../context/score/ScoreState";
import UiState from "../context/ui/UiState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScoreState>
      <UiState>
        <Component {...pageProps} />
      </UiState>
    </ScoreState>
  );
}
export default MyApp;
