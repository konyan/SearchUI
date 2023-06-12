/* eslint-disable max-nested-callbacks */
import { Data } from 'src/hooks/useDataHook';
import { create } from 'zustand';
import JsonData from '../../data/leaderboard.json';

const getInitData = (): Data[] => {
  const jsonArray: { [key: string]: Data } = JsonData;
  const array = Object.keys(jsonArray).map((key) => jsonArray[key]);
  return array;
};

interface IState {
  data: Data[];
  loading: boolean;
  error: boolean;
  searchByUserName: (userName: string) => void;
  closeError: () => void;
}

export const useStore = create<IState>((set, get) => ({
  data: [],
  searchByUserName: (userName: string) => {
    set({ loading: true });
    setTimeout(() => {
      const data = getInitData();
      const sortUser = data
        .sort((a, b) => {
          return b.bananas - a.bananas;
        })
        .map((item, index) => {
          return {
            ...item,
            rank: index + 1,
          };
        });

      const filteredResult = sortUser.filter((item, index) => item.name.toLowerCase().includes(userName.toLowerCase()));
      if (filteredResult.length > 0) {
        const resultUser = filteredResult[0];
        if (resultUser?.rank <= 10) {
          const updateUser = sortUser.slice(0, 10);
          set({ data: updateUser, loading: false });
        } else {
          const updateUser = sortUser.slice(0, 9).concat(resultUser);
          set({ data: updateUser, loading: false });
        }
      } else {
        set({ data: [], loading: false, error: true });
      }
    }, 2000);
  },
  loading: false,
  error: false,
  closeError: () => {
    set({ error: false });
  },
}));
