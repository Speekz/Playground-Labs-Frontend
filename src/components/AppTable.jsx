/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';
import PropTypes from 'prop-types';

import {baseColors} from '../css/config';
import {device} from '../data/ScreenSize';

import AppComponentBorder from '../components/Shared/AppComponentBorder';
import AppButton from './Shared/AppButton';

const tableMediaCss = css`
  width: 20rem;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${baseColors['purple-table-body']};
    border-radius: 9999px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: ${baseColors.purple};
  }

  @media ${device.mobileM} {
    width: 23.5rem;
  }

  @media ${device.mobileL} {
    width: 26.5rem;
  }

  @media ${device.tablet} {
    width: 48rem;
  }

  @media ${device.laptop} {
    width: 64rem;
  }

  @media ${device.laptopL} {
    width: 90rem;
    overflow-x: hidden;
  }
`;

const AppTable = ({head, body, onClick}) => (
  <div css={[tw`overflow-x-scroll`, tableMediaCss]}>
    <AppComponentBorder>
      <div
        css={[
          tw`border-collapse m-5 grid min-w-min`,
          css`
            width: 85rem;
            white-space: nowrap;
          `,
        ]}
      >
        <div
          css={[
            tw`rounded-lg font-medium grid justify-items-center py-4 mb-4`,
            css`
              background-color: ${baseColors['purple-table-head']};
              grid-template-columns: repeat(${head.length}, auto);
            `,
          ]}
        >
          {head.map((value, index) => (
            <div key={index} tw="text-xs lg:text-base">
              {value.toLocaleUpperCase()}
            </div>
          ))}
        </div>
        <div
          css={[
            tw`grid overflow-y-scroll`,
            css`
              &::-webkit-scrollbar {
                width: 5px;
              }

              &::-webkit-scrollbar-track {
                background-color: ${baseColors['purple-table-body']};
                border-radius: 9999px;
              }

              &::-webkit-scrollbar-thumb {
                border-radius: 100px;
                background-color: ${baseColors.purple};
              }
              height: 15.5rem;
              direction: rtl;
              grid-template-rows: repeat(${body.length}, auto);
            `,
          ]}
        >
          <div tw="ml-1">
            {body.map(data => (
              <div
                key={data.claimId}
                css={[
                  tw`grid justify-items-center rounded-lg mb-4 py-4 items-center`,
                  css`
                    direction: ltr;
                    grid-template-columns: repeat(${head.length}, 1fr);
                    background-color: ${baseColors['purple-table-body']};
                  `,
                ]}
              >
                <div tw="flex items-center pl-1">
                  <AppButton
                    type="default"
                    rounded="full"
                    styles={css`
                      width: '4rem';
                    `}
                    onClick={() => onClick(data.claimId)}
                  >
                    Claim
                  </AppButton>
                  <span tw="ml-4 text-sm">Some Activity </span>
                </div>
                {Object.values(data)
                  .slice(1)
                  .map((info, index) => (
                    <div key={index}>{info}</div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppComponentBorder>
  </div>
);

AppTable.propTypes = {
  head: PropTypes.array,
  body: PropTypes.array,
  onClick: PropTypes.func,
};

AppTable.defaultProps = {
  head: [],
  body: [],
  onClick: () => {},
};

export default AppTable;
