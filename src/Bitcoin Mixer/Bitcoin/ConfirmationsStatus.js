// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BITCOIN_WALLET_ADDRESS = 'bc1qdn0wsck0lzaxk330agxrqyq54puwcpcl5tnezt';

// const BitcoinConfirmations = () => {
//   const [confirmations, setConfirmations] = useState(0);

//   useEffect(() => {
//     axios.get(`https://blockchain.info/rawaddr/${BITCOIN_WALLET_ADDRESS}`)
//       .then(res => {
//         setConfirmations(res.data.final_balance);
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>{confirmations}</h1>
//     </div>
//   );
// };

// export default BitcoinConfirmations;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BitcoinTransactionConfirmations = () => {
//   const [confirmations, setConfirmations] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const transactionHash = "17dukzQBQZNNPS6AmagzNdtwqcqkpcp1EC"; // Replace with the Bitcoin address you want to fetch the confirmation status for

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://blockchain.info/rawtx/${transactionHash}`);
//       setConfirmations(response.data.confirmations);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <p>Confirmations: {confirmations}</p>
//     </div>
//   );
// };

// export default BitcoinTransactionConfirmations;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BitcoinTransactionConfirmations = () => {
//   const [confirmations, setConfirmations] = useState();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const bitcoinAddress = "bc1qdn0wsck0lzaxk330agxrqyq54puwcpcl5tnezt"; // Replace with the Bitcoin address you want to fetch the confirmation status for

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://blockchain.info/q/addressbalance/${bitcoinAddress}`);
//       setConfirmations(response.data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <p>Confirmations: {confirmations}</p>
//     </div>
//   );
// };

// export default BitcoinTransactionConfirmations;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BitcoinBalanceCheck = () => {
//   const [balance, setBalance] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const walletAddress = "17dukzQBQZNNPS6AmagzNdtwqcqkpcp1EC"; // Replace with the Bitcoin address you want to fetch the confirmation status for

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://blockchain.info/balance?active=${walletAddress}`);
//       setBalance(response.data[walletAddress].final_balance / 100000000);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <p>Balance: {balance} BTC</p>
//     </div>
//   );
// };

// export default BitcoinBalanceCheck;






import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConfirmationsStatus = () => {
  const [confirmationStatus, setConfirmationStatus] = useState(null);
  const address = "bc1qdn0wsck0lzaxk330agxrqyq54puwcpcl5tnezt";

  useEffect(() => {
    axios.get(`https://blockchain.info/rawaddr/${address}`)
      .then(response => {
        setConfirmationStatus(response.data.txs[0].confirmations);
      });
  }, []);

  return (
    <div>
      {confirmationStatus ? (
        <p>Confirmation status: {confirmationStatus}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ConfirmationsStatus;





// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [confirmations, setConfirmations] = useState(0);

//   useEffect(() => {
//     const fetchConfirmations = async () => {
//       const address = "bc1q0rm54366qdjzvm483v40u7kc9ucf9suwj7hghd"; // Replace with the Bitcoin address you want to fetch the confirmation status for
//       const url = `https://blockchain.info/q/getreceivedbyaddress/${address}`;
      
//       const { data } = await axios.get(url);
      
//       setConfirmations(Math.floor((Date.now() / 1000 - data) / 60 / 60 / 24));
//     };

//     fetchConfirmations();
//   }, []);

//   return (
//     <div>
//       <p>{confirmations}</p>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ConfirmationsStatus = () => {
//   const [confirmationStatus, setConfirmationStatus] = useState(null);
//   const address = 'bc1q0rm54366qdjzvm483v40u7kc9ucf9suwj7hghd';

//   useEffect(() => {
//     axios.get(`https://blockchain.info/rawaddr/${address}`)
//       .then(response => {
//         setConfirmationStatus(response.data.txs[0].confirmations);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [address]);

//   return (
//     <div>
//       {confirmationStatus ? (
//         <p>{address}: {confirmationStatus}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ConfirmationsStatus;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BitcoinTransactionCheck = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://blockchain.info/rawaddr/bc1q0rm54366qdjzvm483v40u7kc9ucf9suwj7hghd`);
//       setTransactions(response.data.txs);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {transactions.map((transaction) => (
//         <div key={transaction.hash}>
//           <p>Transaction Hash ID: {transaction.hash}</p>
//           <p>Confirmations: {transaction.confirmations} / 6</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BitcoinTransactionCheck;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BitcoinTransactionCheck = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const walletAddress = "bc1q0rm54366qdjzvm483v40u7kc9ucf9suwj7hghd"; // Replace with the Bitcoin address you want to fetch the confirmation status for

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://blockchain.info/rawaddr/${walletAddress}`);
//       setTransactions(response.data.txs);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {transactions.map((transaction) => (
//         <div key={transaction.hash}>
//           <p>Transaction Hash ID: {transaction.hash}</p>
//           <p>Confirmations: {transaction.confirmations} / 6</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BitcoinTransactionCheck;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BitcoinTransactionCheck = () => {
//   const [transaction, setTransaction] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://blockchain.info/rawtx/bc1q0rm54366qdjzvm483v40u7kc9ucf9suwj7hghd`);
//       setTransaction(response.data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <p>Transaction Hash ID: {transaction.hash}</p>
//       <p>Confirmations: {transaction.confirmations}</p>
//     </div>
//   );
// };

// export default BitcoinTransactionCheck;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [confirmations, setConfirmations] = useState(0);

//   useEffect(() => {
//     const fetchConfirmations = async () => {
//       const address = "bc1q0rm54366qdjzvm483v40u7kc9ucf9suwj7hghd"; // Replace with the Bitcoin address you want to fetch the confirmation status for
//       const url = `https://api.blockchair.com/bitcoin/dashboards/address${address}`;
      
//       const { data } = await axios.get(url);
      
//       setConfirmations(Math.floor((Date.now() / 1000 - data) / 60 / 60 / 24));
//     };

//     fetchConfirmations();
//   }, []);

//   return (
//     <div>
//       <p>{confirmations}/12</p>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchBitcoinStatus = (address) => {
//   const [confirmations, setConfirmations] = useState(0);
//   const [unconfirmed, setUnconfirmed] = useState(0);

//   useEffect(() => {
//     axios.get(`https://blockchain.info/rawaddr/bc1q0rm54366qdjzvm483v40u7kc9ucf9suwj7hghd`)
//       .then(res => {
//         setConfirmations(res.data.final_balance);
//         setUnconfirmed(res.data.unconfirmed_balance);
//       })
//       .catch(error => console.error(error));
//   }, [address]);

//   return (
//     <div>
//       <p>Confirmations: {confirmations}</p>
//       <p>Unconfirmed Balance: {unconfirmed}</p>
//       <a href={`https://blockchain.info/address/${address}`}>View on Blockchain.info</a>
//     </div>
//   );
// };

// export default FetchBitcoinStatus;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BitcoinTransactionCheck = () => {
//   const [transaction, setTransaction] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://blockchain.info/rawaddr/bc1q0rm54366qdjzvm483v40u7kc9ucf9suwj7hghd`);
//       setTransaction(response.data.txs[0]);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <p>Transaction Hash ID: {transaction.hash}</p>
//       <p>Confirmations: {transaction.confirmations}</p>
//     </div>
//   );
// };

// export default BitcoinTransactionCheck;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchBitcoinStatus = (address) => {
//   const [status, setStatus] = useState({});

//   useEffect(() => {
//     const address = "bc1q0rm54366qdjzvm483v40u7kc9ucf9suwj7hghd"; // Replace with the Bitcoin address you want to fetch the confirmation status for
//     axios.get(`https://api.blockchair.com/bitcoin/dashboards/address/${address}`)
//       .then(res => {
//         setStatus(res.data.data[address].last_transaction.confirmations);
//       })
//       .catch(error => console.error(error));
//   }, [address]);

//   return (
//     <div>
//       <p>{status}</p>
//     </div>
//   );
// };

// export default FetchBitcoinStatus;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ConfirmationsStatus = ({ address }) => {
//   const [confirmationStatus, setConfirmationStatus] = useState(null);

//   useEffect(() => {
//     axios.get(`https://blockchain.info/rawaddr/${address}`)
//       .then(response => {
//         setConfirmationStatus(response.data.txs[0].confirmations);
//       });
//   }, [address]);

//   return (
//     <div>
//       {confirmationStatus ? (
//         <p>Confirmation status: {confirmationStatus}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ConfirmationsStatus;

