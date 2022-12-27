import differenceInMinutes from "date-fns/differenceInMinutes";
import differenceInHours from "date-fns/differenceInHours";
import differenceInDays from "date-fns/differenceInDays";
import sub from "date-fns/sub";

// В данный момент выводится просто текущее значение. Пример: 2017-09-01 14:15:10.
// Решено изменять представление даты следующим образом
// в зависимости от его значения: 12 минут назад,
// если прошло меньше часа, 5 часов назад,
// если прошло больше часа, X дней назад, если больше суток.

export const handleDate = (date: Date): string => {
  switch (true) {
    case differenceInMinutes(new Date(), date) < 60:
      return `${differenceInMinutes(new Date(), date)} минут назад`;
    case differenceInHours(new Date(), date) < 24:
      return `${differenceInHours(new Date(), date)} часов назад`;
    default:
      return `${differenceInDays(new Date(), date)} дней назад`;
  }
};
