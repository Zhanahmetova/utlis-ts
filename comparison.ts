export const generalInfoMap = [
  'year_manufactured',
  'mileage',
  'gearbox_type',
  'engine_volume',
  'engine_power',
  'drive_type',
  'coupe_type',
  'color'
];

export const isEqualList = (
  dataList: ReadonlyArray<string | number | undefined | boolean>
): boolean => {
  return dataList.every(item => item === dataList[0]);
};

export const generalInfoMapNewAuto = [
  'gearbox_type',
  'engine_volume',
  'engine_power',
  'drive_type',
  'coupe_type',
  'color'
];
