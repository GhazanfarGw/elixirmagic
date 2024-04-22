import React, { useEffect, useState } from "react";

const Form = () => {
  const [inputData, setInputData] = useState(null);

  useEffect(() => {
    // Retrieve input data from local storage
    const data = localStorage.getItem('inputData');
    if (data) {
      setInputData(JSON.parse(data));
    }
  }, []);

  if (!inputData) {
    return <p className="py-3 px-5 text-red-500 max-w-xs md:text-sm text-xs justify-center text-center items-center overflow-hidden mx-auto font-semibold"> No address data found.</p>;
  }

  return (
    <>
      <p className="hidden">{inputData.deposit}</p>
      <p className="hidden">{inputData.network}</p>
      <p className="hidden">{inputData.amount}</p>
      <div className="max-w-sm mx-auto flex flex-row gap-2 text-white font-semibold justify-center items-center text-center py-3 px-10 md:px-20 text-xs bg-[#0D0D0D]">
        <p className='text-green-500'>100%</p>
        <p>{inputData.address}</p>
      </div>
    </>
  );
};

export default Form;
