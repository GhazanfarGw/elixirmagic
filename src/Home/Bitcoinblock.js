import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [blockHeight, setBlockHeight] = useState(0);

  useEffect(() => {
    const fetchBlockHeight = async () => {
      const url = `https://blockchain.info/q/getblockcount`;
      
      const { data } = await axios.get(url);
      
      setBlockHeight(data);
    };

    fetchBlockHeight();
  }, []);

  return (
    <div>
      <p>{blockHeight}</p>
    </div>
  );
};

export default App;