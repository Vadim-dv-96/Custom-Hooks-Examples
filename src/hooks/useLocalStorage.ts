import { useEffect, useState } from 'react';
import { BooksType } from '../UseLocalStorageExample/components/Books';

export const useLocalStorage = (initValue: Array<BooksType>, key: string) => {
  const getValue = () => {
    const storage = localStorage.getItem(key); //string | null

    if (storage) {
      return JSON.parse(storage); //'[]'
    } else {
      return initValue;
    }
  };

  const [value, setValue] = useState<Array<BooksType>>(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return { value, setValue };
};
