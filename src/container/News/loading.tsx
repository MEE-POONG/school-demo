import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const ButtonWithLoading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const openNewPage = () => {
    setIsLoading(true);
 
    setTimeout(() => {
        setIsLoading(false);
    }, 500);
  };

  return (
    <div className="">
      <button
        onClick={openNewPage}
        className={` ${
          isLoading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={isLoading}
      >
        {isLoading ?  <AiOutlineLoading3Quarters className="animate-spin w-56" /> : " ดูเพิ่ม >>>>"}
      </button>

    </div>
  );
};

export default ButtonWithLoading;