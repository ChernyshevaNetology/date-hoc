import differenceInMinutes from "date-fns/differenceInMinutes";
import differenceInHours from "date-fns/differenceInHours";
import differenceInDays from "date-fns/differenceInDays";

export const handleDate = (date: Date): string => {
  const diffInMinutes: number = differenceInMinutes(new Date(), date);
  const diffInHours: number = differenceInHours(new Date(), date);
  const diffInDays: number = differenceInDays(new Date(), date);

  switch (true) {
    case diffInMinutes < 60:
      return `${diffInMinutes} минут назад`;
    case diffInHours < 24:
      return `${diffInHours} часов назад`;
    default:
      return `${diffInDays} дней назад`;
  }
};
