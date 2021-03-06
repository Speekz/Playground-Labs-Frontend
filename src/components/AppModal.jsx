/** @jsxImportSource @emotion/react */
import {useEffect, useRef, useState} from 'react';
import tw, {css} from 'twin.macro';
import PropTypes from 'prop-types';

import {baseColors} from '../css/config';
import {device} from '../data/ScreenSize';

import AppButton from './Shared/AppButton';
import AppComponentBorder from './Shared/AppComponentBorder';
import AppInput from './Shared/AppInput';

const AppModal = ({onSubmit, onCancel}) => {
  const node = useRef();

  const [bitcoinWallet, setBitcoinWallet] = useState('');
  const [validWallet, setValidWallet] = useState(false);

  useEffect(() => {}, [bitcoinWallet]);

  useEffect(() => {
    document.addEventListener('mousedown', handleAwayClick);

    return () => {
      document.removeEventListener('mousedown', handleAwayClick);
    };
  }, []);

  const handleInputChange = e => {
    const tempWallet = e.target.value;
    setBitcoinWallet(tempWallet);
    if (tempWallet.length !== 42 || tempWallet.substring(0, 2) !== '0x') {
      setValidWallet(false);
      return;
    }
    setValidWallet(true);
  };

  const handleAwayClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    onCancel(false);
  };

  return (
    <div
      css={[
        tw`fixed inset-0 z-10`,
        css`
          background-color: ${baseColors['modal-opacity']};
        `,
      ]}
    >
      <div tw="h-full flex justify-center items-center">
        <AppComponentBorder>
          <div
            ref={node}
            css={[
              tw`shadow-2xl`,
              css`
                width: 15rem;
                height: 28rem;

                @media ${device.tablet} {
                  width: 30rem;
                  height: 28rem;
                }
              `,
            ]}
          >
            <div tw="flex flex-col justify-center items-center pt-4">
              <div tw="mb-10">
                <span>CLAIM</span>
              </div>
              <img tw="w-32 mb-6" alt="bitcoin-icon" src="/icons/bitcoin-icon.png"></img>
              <div tw="flex flex-col items-center mb-8">
                <span tw="italic font-medium">Transfer To</span>
                <AppInput
                  placeholder="Bitcoin Wallet"
                  maxLength="10"
                  onChange={handleInputChange}
                  validInput={validWallet}
                  styles={css`
                    width: 12rem;
                    height: 2.5rem;

                    @media ${device.tablet} {
                      width: 22rem;
                      height: 2.5rem;
                    }
                  `}
                />
              </div>
              <AppButton
                type={validWallet ? 'accept' : 'disable'}
                rounded="lg"
                styles={css`
                  width: 8rem;
                  padding: 0.7rem;
                  margin-top: 0.5rem;

                  @media ${device.tablet} {
                    width: 17rem;
                  }
                `}
                onClick={() => onSubmit(bitcoinWallet)}
              >
                Claim
              </AppButton>
              <AppButton
                type="decline"
                rounded="lg"
                styles={css`
                  width: 8rem;
                  padding: 0.7rem;
                  margin-top: 0.5rem;

                  @media ${device.tablet} {
                    width: 17rem;
                  }
                `}
                onClick={() => onCancel()}
              >
                Back
              </AppButton>
            </div>
          </div>
        </AppComponentBorder>
      </div>
    </div>
  );
};

AppModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

AppModal.defaultProps = {
  onSubmit: () => {},
  onCalcel: () => {},
};

export default AppModal;
