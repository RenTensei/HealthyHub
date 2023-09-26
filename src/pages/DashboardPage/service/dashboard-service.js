import { axiosAuth } from '@/utils/network';

export const getMonthStatistic = async (query) => {
  const { data } = await axiosAuth.get(`/user/statistics?range=${query}`);

  return data;
};