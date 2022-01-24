/** @jsxImportSource @emotion/react */
import {css} from 'twin.macro';

import {baseColors} from './css/config';

import ClaimRewards from './views/ClaimRewards';

const backgroundGradient = css`
  background-image: linear-gradient(
    to right,
    ${baseColors['purple-dark']},
    ${baseColors['purple-light']}
  );
  color: white;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <div className="App" css={[backgroundGradient]}>
      <ClaimRewards />
    </div>
  );
}

export default App;
