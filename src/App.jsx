/** @jsxImportSource @emotion/react */

import { css } from "twin.macro";

import AppButton from "./components/Shared/AppButton";
import { baseColors } from "./css/config";

const backgroundGradient = css`
  background-image: linear-gradient(
    to right,
    ${baseColors["purple-dark"]},
    ${baseColors["purple-light"]}
  );
  color: white;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <div className="App" css={[backgroundGradient]}>
      <AppButton />
    </div>
  );
}

export default App;
