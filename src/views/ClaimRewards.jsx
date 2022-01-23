import {useEffect, useState} from 'react';

import {request} from '../services/request';

import AppTable from '../components/AppTable';

const exampleTHead = [
  'your earnings',
  'reward',
  'unclaimed',
  'total claimed',
  'xyz earned',
  'total usd',
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
    <div>
      <AppTable head={exampleTHead} />
    </div>
  );
}

export default ClaimRewards;
