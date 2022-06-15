import { createSelector } from "reselect";
import FILTER_TYPE_ROOMS from "../../constants/filtersRoom";
import sortBy from "lodash/sortBy";
// import filter from "lodash/filter";
import { areIntervalsOverlapping } from "date-fns";

export const selectRooms = ({ apartments }) => apartments.rooms;
export const selectCurrentFilterRooms = ({ apartments }) =>
  apartments.currentFiLter;
export const selectSearchQueryStringRooms = ({ apartments }) =>
  apartments.filterText;
export const selectIsLoadingRooms = ({ apartments }) =>
  apartments.isLoadingRooms;
export const selectSortedRoomsByCurrentFilter = ({
  apartments: { rooms, currentFiLter },
}) => {
  if (currentFiLter === FILTER_TYPE_ROOMS.PRICE) {
    return sortBy(rooms, "price");
  }
  if (currentFiLter === FILTER_TYPE_ROOMS.FREE_PLACES) {
    return sortBy(rooms, "numberOfPlaces");
  }
  if (currentFiLter === FILTER_TYPE_ROOMS.RATING) {
    return sortBy(rooms, "rating");
  }
};

export const selectFilteredRooms = createSelector(
  selectSortedRoomsByCurrentFilter,
  selectSearchQueryStringRooms,
  (filteredRooms, searchQuery) =>
    filteredRooms.filter((room) =>
      room.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
);

export const selectOptionsForSearchRoom = ({ apartments }) =>
  apartments.optionsForSearchRoom;

const selectBookedPlacesInRooms = createSelector(
  selectFilteredRooms,
  selectOptionsForSearchRoom,
  (rooms, options) =>
    rooms.map((room) =>
      room.booked
        .filter((oneReservation) =>
          areIntervalsOverlapping(
            {
              start: new Date(oneReservation.dateStart),
              end: new Date(oneReservation.dateEnd),
            },
            {
              start: new Date(options.dateStart),
              end: new Date(options.dateEnd),
            }
          )
        )
        .reduce(
          (acc, reservation) =>
            "numberOfPerson" in reservation
              ? (acc += reservation.numberOfPerson)
              : acc,
          0
        )
    )
);

export const selectRoomsWithFreePlaces = createSelector(
  selectFilteredRooms,
  selectBookedPlacesInRooms,
  (rooms, reservedPlaces) =>
    rooms.map((room, index) => ({
      ...room,
      numberOfPlaces: room.numberOfPlaces - reservedPlaces[index],
    }))
);
