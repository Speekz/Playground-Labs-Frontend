/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';
import PropTypes from 'prop-types';

import {baseColors} from '../../css/config';

const BASE_BUTTON_CSS = css`
  transition: background 0.1s ease;
`;

const BUTTON_TYPES = {
  default: {
    key: 'default',
    css: css`
      background-color: ${baseColors.green};
      &:hover {
        filter: brightness(110%);
      }
    `,
  },
  accept: {
    key: 'accept',
    css: css`
      background-color: ${baseColors.purple};
      &:hover {
        filter: brightness(110%);
      }
    `,
  },
  decline: {
    key: 'decline',
    css: css`
      background-color: ${baseColors['blue-purple']};
      &:hover {
        filter: brightness(110%);
      }
    `,
  },
  disable: {
    key: 'disable',
    css: css`
      pointer-events: none;
      background-color: ${baseColors.grey};
    `,
  },
};

const getButtonType = key => {
  if (key instanceof Object) {
    return {...key};
  }
  if (BUTTON_TYPES[key]) {
    return BUTTON_TYPES[key];
  }
  return null;
};

const getButtonTypeCss = key => {
  const buttonType = getButtonType(key);
  if (!buttonType || !buttonType.css) return '';
  return buttonType.css;
};

const AppButton = ({children, type, rounded, onClick, ...restProps}) => {
  return (
    <div
      css={[
        BASE_BUTTON_CSS,
        getButtonTypeCss(type),
        tw`relative inline-flex items-center justify-center py-2 px-4 font-medium italic cursor-pointer`,
        css`
          ${rounded === 'full' ? tw`rounded-full` : ''};
          ${rounded === 'lg' ? tw`rounded-lg` : ''};
        `,
      ]}
      onClick={e => onClick(e)}
      {...restProps}
    >
      <span tw="inline-flex items-center justify-center">{children}</span>
    </div>
  );
};

AppButton.propTypes = {
  type: PropTypes.string,
  rounded: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func,
};

AppButton.defaultProps = {
  type: 'default',
  rounded: 'lg',
  onClick: () => {},
};

export default AppButton;
