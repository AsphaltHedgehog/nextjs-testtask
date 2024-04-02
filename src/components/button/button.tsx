'use client';

import React, { ButtonHTMLAttributes, useEffect, useState } from "react";  

// components
import toggleFavorite from "../toggleFav";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: string;
  favorite: boolean;
  jobId: string;
}

export default function Button({ disabled, favorite, children, jobId, ...rest }: ButtonProps) {
  const [favArr, setFavArr] = useState<string[]>([]);

  useEffect(() => {
    if (favorite) {
      const storedTheme = localStorage.getItem("data");
      if (storedTheme && favArr.length < 1) {
        setFavArr(JSON.parse(storedTheme));
      }
    }
  }, [favArr.length, favorite]);

  const handleClick = () => {
    
    toggleFavorite({jobId, favArr, setFavArr})
  };

  return (
    <button {...rest}
      onClick={handleClick}
      className='py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded'>
      {/* {jobId} */}
      {children}
    </button>
  );
};