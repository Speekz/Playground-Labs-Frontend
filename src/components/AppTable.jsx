/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';
import PropTypes from 'prop-types';

import {baseColors} from '../css/config';
import AppComponentBorder from '../components/Shared/AppComponentBorder';
import AppButton from './Shared/AppButton';

const AppTable = ({head, body, onClick}) => (
  <AppComponentBorder>
    <div css={[tw`border-collapse m-5 grid`]}>
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
          <div key={index}>{value.toLocaleUpperCase()}</div>
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
                  style={{width: '4em'}}
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
