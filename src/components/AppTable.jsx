/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';

import {baseColors} from '../css/config';
import AppComponentBorder from '../components/Shared/AppComponentBorder';

const tHeadCss = css`
  background-color: ${baseColors.purple};
`;

const AppTable = ({head, body}) => (
  <AppComponentBorder>
    <div css={[tw`border-collapse m-5 grid`]}>
      <div
        css={[
          tHeadCss,
          tw`rounded-lg font-medium grid`,
          css`
            grid-template-columns: repeat(${head.length}, 1fr);
          `,
        ]}
      >
        {head.map((value, index) => (
          <div key={index} tw="px-5">
            {value.toLocaleUpperCase()}
          </div>
        ))}
      </div>
      <div
        css={[
          tw`grid`,
          css`
            grid-template-rows: repeat(${body.length}, 1fr);
          `,
        ]}
      >
        {body.map(data => (
          <div
            key={data.claimId}
            css={[
              tw`grid justify-items-center`,
              css`
                grid-template-columns: repeat(${head.length}, 1fr);
              `,
            ]}
          >
            <div>Some Activity</div>
            <div>{data.rewardToken}</div>
            <div>{data.unclaimedAmount}</div>
            <div>{data.totalClaimed}</div>
            <div>{data.rewardTokenEarned}</div>
            <div>{data.usdTotal}</div>
            <div>{data.weeklyRank}</div>
          </div>
        ))}
      </div>
    </div>
  </AppComponentBorder>
);

export default AppTable;
