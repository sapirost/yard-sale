import { StorageItems } from '@/utils/globalEnums';
import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';

const defaultState = {
  starredItems: {},
  updateStarredItems: () => {},
};

export const StorageContext = createContext<StorageContext>(defaultState);

export const StorageProvider = ({ children }: WithChildren) => {
  const [starredItems, setStarredItems] = useState({});

  const updateStarredItems = useCallback(
    (id: number, isStarred: boolean) => {
      const updatedList = { ...starredItems, [id]: isStarred };
      localStorage.setItem(StorageItems.STARRED, JSON.stringify(updatedList));
      setStarredItems(updatedList);
    },
    [setStarredItems, starredItems],
  );

  useEffect(() => {
    const saved = localStorage.getItem(StorageItems.STARRED);
    const initialValue = JSON.parse(saved || '{}');
    setStarredItems(initialValue);
  }, []);

  const value = useMemo(
    () => ({ starredItems, updateStarredItems }),
    [starredItems, updateStarredItems],
  );

  return (
    <StorageContext.Provider value={value}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = () => useContext(StorageContext);
