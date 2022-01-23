/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';

import {baseColors} from '../css/config';
import AppComponentBorder from '../components/Shared/AppComponentBorder';

const tHeadCss = css`
  background-color: ${baseColors.purple};
`;

const AppTable = ({head, body}) => (
  <AppComponentBorder>
    <div tw="table border-collapse m-5">
      <div css={[tHeadCss, tw`py-4 px-8 rounded-lg font-medium`]}>
        <div tw="table-row">
          {head.map((value, index) => (
            <div key={index} tw="table-cell px-5">
              {value.toLocaleUpperCase()}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div tw="table-row">
          <div tw="table-cell">The table body</div>
          <div tw="table-cell">with two columns</div>
        </div>
      </div>
    </div>
  </AppComponentBorder>
);

export default AppTable;
