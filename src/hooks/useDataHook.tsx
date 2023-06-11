import { useEffect, useState } from 'react';
import JsonData from '../../data/leaderboard.json';

interface Data {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}

const useDataHook = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    getJsonToArray();
  }, []);

  const getJsonToArray = () => {
    const jsonArray: { [key: string]: Data } = JsonData;
    const array = Object.keys(jsonArray).map((key) => jsonArray[key]);
    setData(array);
  };

  return { data };
};

export default useDataHook;
