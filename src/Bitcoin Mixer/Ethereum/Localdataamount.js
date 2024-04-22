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
    return <p className="py-3 px-5 text-red-500 max-w-xs md:text-sm text-xs justify-center text-center items-center overflow-hidden mx-auto font-semibold">No amount data found</p>;
  }

  return (
    <>
        <p className="hidden">{inputData.deposit}</p>
        <p className="hidden">{inputData.network}</p>
        <div className="max-w-xs mx-auto flex flex-row text-white font-semibold justify-between items-center text-center py-3 text-xs px-5">
            <p>
                Send
            </p>
            <p className="bg-[#0D0D0D] py-2 px-8">
                {inputData.amount}
            </p>
            <p>
                ETC to
            </p>
        </div>
        <p className="hidden">{inputData.address}</p>
    </>
  );
};

export default Form;
