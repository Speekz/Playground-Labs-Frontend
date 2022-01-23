/** @jsxImportSource @emotion/react */
import tw, {styled, css} from 'twin.macro';

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

const AppButton = ({children, type, rounded, className, onClick, ...restProps}) => {
  const onButtonClick = e => {
    alert(JSON.stringify(restProps));
  };

  return (
    <div
      css={[
        BASE_BUTTON_CSS,
        getButtonTypeCss(type),
        tw`relative inline-flex items-center justify-center py-1 px-4 font-medium italic`,
        css`
          ${rounded === 'full' ? tw`rounded-full` : ''};
          ${rounded === 'lg' ? tw`rounded-lg` : ''};
        `,
        className,
      ]}
      onClick={e => onButtonClick(e)}
      {...restProps}
    >
      <span tw="inline-flex items-center justify-center">{children}</span>
    </div>
  );
};

export default AppButton;
