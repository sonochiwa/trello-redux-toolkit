import { useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [toggle, setToggle] = useState(initialValue);

  const setTrue = () => {
    setToggle(true);
  };

  const setFalse = () => {
    setToggle(false);
  };

  return { toggle, setToggle, setTrue, setFalse };
};