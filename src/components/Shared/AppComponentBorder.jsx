/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';
import PropTypes from 'prop-types';

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
  background-color: ${baseColors['general-background']};
  width: fit-content;
`;

const AppComponentBorder = ({children}) => (
  <div css={[tableBorder, tw`rounded-lg`]}>
    <div css={[childrenCss, tw`flex justify-center rounded-lg`]}>{children}</div>
  </div>
);

AppComponentBorder.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AppComponentBorder;
