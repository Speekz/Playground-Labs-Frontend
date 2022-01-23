/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';

import {baseColors} from '../css/config';
import AppComponentBorder from '../components/Shared/AppComponentBorder';
import AppButton from './Shared/AppButton';

const tHeadCss = css`
  background-color: ${baseColors.purple};
`;

const AppTable = ({head, body}) => (
  <AppComponentBorder>
    <div css={[tw`border-collapse m-5 grid`]}>
      <div
        css={[
          tHeadCss,
          tw`rounded-lg font-medium grid justify-items-center py-4 mb-4`,
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
            <div tw="flex">
              <AppButton type="default" rounded="full" style={{width: '4em'}}>
                Claim
              </AppButton>
              <div tw="ml-4">Some Activity</div>
            </div>
            {Object.values(data)
              .slice(1)
              .map(info => (
                <div>{info}</div>
              ))}
          </div>
        ))}
      </div>
    </div>
  </AppComponentBorder>
);

export default AppTable;
