import sortBy from "lodash";

export const selectUser = ({ user }) => user.user;
export const selectisLoadingUser = ({ user }) => user.isLoadingUser;
export const selectError = ({ user }) => user.error;
export const selectErrorRegistration = ({ user }) => user.errorRegistration;
export const selectUsersBooking = ({ user }) =>
  [...user.user.details.booking].reverse();
