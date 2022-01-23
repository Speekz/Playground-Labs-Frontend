/** @jsxImportSource @emotion/react */
import {css} from 'twin.macro';

import AppButton from './components/Shared/AppButton';
import {baseColors} from './css/config';

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
      <div>
        <AppButton type="default" rounded="full" style={{width: '4em'}}>
          Claim
        </AppButton>
      </div>
      <div>
        <AppButton type="accept" rounded="lg" style={{width: '12em', height: '2em'}}>
          Claim
        </AppButton>
      </div>
      <div>
        <AppButton type="decline" rounded="lg" style={{width: '12em', height: '2em'}}>
          Back
        </AppButton>
      </div>
    </div>
  );
}

export default App;
