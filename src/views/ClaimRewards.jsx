/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';

import {useEffect, useState} from 'react';

import {request} from '../services/request';

import AppTable from '../components/AppTable';
import AppModal from '../components/AppModal';

const exampleTHead = [
  'your earnings',
  'reward',
  'unclaimed',
  'total claimed',
  'xyz earned',
  'total (usd)',
  'weekly rank',
];

function ClaimRewards() {
  const [tableContent, setTableContent] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [claimId, setClaimId] = useState(null);

  useEffect(() => {
    getTableContent();
  }, []);

  const getTableContent = async () => {
    try {
      const response = await request.get('/claims');
      setTableContent(response.data);
    } catch (e) {
      alert(`Error: ${e}`);
    }
  };

  const handleTableClick = claimId => {
    setDisplayModal(true);
    setClaimId(claimId);
  };

  const handleModalSubmit = async walletId => {
    try {
      await request.post('/submitClaim', {claimId, address: walletId});
      setDisplayModal(false);
    } catch (e) {
      alert(`Error: ${e}`);
    }
  };

  const handleBackModal = () => {
    setDisplayModal(false);
  };

  return (
    <div tw="w-screen h-screen flex justify-center items-center relative">
      <div tw="w-3/4">
        <AppTable head={exampleTHead} body={tableContent} onClick={handleTableClick} />
        {displayModal && <AppModal onSubmit={handleModalSubmit} onCancel={handleBackModal} />}
      </div>
    </div>
  );
}

export default ClaimRewards;
