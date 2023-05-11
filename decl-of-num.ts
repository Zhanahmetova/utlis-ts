/**
 * Склонение числительных
 * прим.
 * declOfNum(1, ['минута', 'минуты', 'минут']); // минута
 * declOfNum(2, ['минута', 'минуты', 'минут']); // минуты
 * declOfNum(5, ['минута', 'минуты', 'минут']); // минут
 */

export const declOfNum = (number: number, words: string[]) =>
  words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
