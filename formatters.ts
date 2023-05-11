import { ImageBannerActionTypes, ImageBannerLabelTypes } from '~/types/publications/publications';

export const getStatus = (status: string): ImageBannerLabelTypes | undefined => {
  if (status && status.toUpperCase() in ImageBannerLabelTypes) {
    return ImageBannerLabelTypes[status.toUpperCase()];
  }
  return undefined;
};

export const getActionName = (action: string): ImageBannerActionTypes => {
  if (action in ImageBannerActionTypes) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return ImageBannerActionTypes[action];
  }
  return ImageBannerActionTypes.unknown;
};

export const moneyMask = [
  'N##',
  'N ###',
  'N# ###',
  'N## ###',
  'N ### ###',
  'N# ### ###',
  'N## ### ###'
];

export const mileageMask = [
  'N##',
  'N ###',
  'N# ###',
  'N## ###'
];

export const formatNumber = (arg: string): string => {
  const number = parseInt(arg).toFixed();
  return number.replace(/\B(?=(\d{3})+(?!\d)+(?!\d))/g, ' ');
};

export const formatPhoneNumber = (phone: string): string => {
  return phone?.replace(/(\d)\D?(\d{3})\D?(\d{3})\D?(\d{2})\D?(\d{2})/, '$1 ($2) $3 $4 $5');
};

export const parsePhoneNumber = (value: string): string =>
  value
    .replace(/[\n# $&:\n\t]/g, '')
    .replace(/(-)/g, '')
    .replace('(', '')
    .replace(')', '');

export const formatToNumber = (val:string):number => Number(val.split(' ').join(''));
