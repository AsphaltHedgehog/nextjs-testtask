'use client';

import React, { ButtonHTMLAttributes, useEffect, useState } from "react";  


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import toggleFavorite from "../toggleFav";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  jobId: string;
  setFavoriteIds?: React.Dispatch<React.SetStateAction<string[]>>
}

export default function Button({ jobId, setFavoriteIds, ...rest }: ButtonProps) {
  const [favArr, setFavArr] = useState<string[]>([]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("data");
    if (storedTheme && storedTheme.length < 1) {
      return;
    };
    if (storedTheme !== null) {
      setFavArr(JSON.parse(storedTheme));
    };
  }, []);

  const handleClick = () => {
    toggleFavorite({ jobId, setFavArr, setFavoriteIds })
    toast.success(favArr.includes(jobId) ? "Successfully removed" : "Successfully added");
  };

  return (
    <button {...rest}
      onClick={handleClick}
      className={`py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded' ${favArr.includes(jobId) ? 'bg-pink-600' : ""} favButton`}>
      {favArr.includes(jobId) ? "Unlike" : "Like"}
    </button>
  );
};