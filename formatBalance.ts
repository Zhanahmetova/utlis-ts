import { formatToNumberWithSpace } from '~/utils/formatToNumberWithSpace';

export const formatBalance = (value: string) => {
  return formatToNumberWithSpace(parseInt(value) || 0);
};
