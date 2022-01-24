/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';

import {baseColors} from '../../css/config';

const AppInput = ({maxLength, placeholder, rounded, validInput, onChange, ...restProps}) => (
  <div
    css={css`
      text-align: center;
      padding-top: 0.5rem;
    `}
  >
    <input
      placeholder={placeholder}
      type="text"
      css={[
        tw`rounded-lg`,
        css`
          color: white;
          background-color: ${baseColors.input};
          text-align: center;
          border: 1px solid ${validInput ? baseColors.green : baseColors['purple-dark']};

          ::-webkit-input-placeholder {
            text-align: center;
          }

          &:hover {
            box-shadow: 0px 0px 1px 1px ${baseColors.purple};
          }
        `,
      ]}
      {...restProps}
      onChange={e => onChange(e)}
    ></input>
  </div>
);

export default AppInput;
