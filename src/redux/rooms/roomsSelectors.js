import { createSelector } from "reselect";
import FILTER_TYPE_ROOMS from "../../constants/filtersRoom";
import sortBy from "lodash/sortBy";

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
    return sortBy(rooms, "freePlaces");
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
