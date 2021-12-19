import millify from 'millify';

export const millifyHoc = (value: number) =>
  value < 1 ? "< 1" : millify(value);
