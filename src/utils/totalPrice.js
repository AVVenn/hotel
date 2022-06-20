import { differenceInCalendarDays } from "date-fns";

export const getTotalPrice = (price, places, dateEnd, dateStart) => {
  return (
    price *
    places *
    differenceInCalendarDays(new Date(dateEnd), new Date(dateStart))
  );
};
