import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [mempool, setMempool] = useState({});

  useEffect(() => {
    axios.get('https://api.blockchair.com/bitcoin/mempool')
      .then(res => {
        setMempool(res.data.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>

      <p>{mempool.blocks_remaining}</p>
    </div>
  );
}

export default App;