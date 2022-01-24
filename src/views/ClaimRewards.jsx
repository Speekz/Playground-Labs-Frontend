/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';

import {useEffect, useState} from 'react';

import {request} from '../services/request';

import AppTable from '../components/AppTable';

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

  useEffect(() => {
    getTableContent();
  }, [tableContent]);

  const getTableContent = async () => {
    try {
      const response = await request.get('/claims');
      setTableContent(response.data);
    } catch (e) {
      alert('Error', e);
    }
  };

  return (
    <div tw="w-full h-full flex justify-center items-center">
      <div tw="w-3/4">
        <AppTable head={exampleTHead} body={tableContent} />
      </div>
    </div>
  );
}

export default ClaimRewards;
