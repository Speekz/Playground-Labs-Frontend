/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';

import {baseColors} from '../../css/config';

const tableBorder = css`
  padding: 2px;
  position: relative;
  background-image: linear-gradient(
    to left,
    ${baseColors['purple-dark']},
    ${baseColors['purple-light']}
  );
  width: fit-content;
`;

const childrenCss = css`
  background-color: ${baseColors.background};
  width: fit-content;
`;

const AppComponentBorder = ({children}) => (
  <div css={[tableBorder, tw`rounded-lg`]}>
    <div css={[childrenCss, tw`flex justify-center rounded-lg`]}>{children}</div>
  </div>
);

export default AppComponentBorder;
