import { addDays, isWithinInterval } from "date-fns";

export default function findSuccessfulLiving(booking) {
  let reserve;
  if (booking) {
    reserve = booking.find(
      (book) =>
        isWithinInterval(new Date(), {
          start: new Date(book.dateStart), // здесь dateEnd
          end: addDays(new Date(book.dateEnd), 7),
        }) && !book.isVotedRating
    );
    console.log(reserve);
  }
  return reserve ? [reserve.roomId, reserve.reservationId] : [];
}
