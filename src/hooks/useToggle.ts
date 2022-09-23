import { useState } from 'react';

export const useToggle = (initValue: boolean) => {
  const [value, setValue] = useState(initValue);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
};
