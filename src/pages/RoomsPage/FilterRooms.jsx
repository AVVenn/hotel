import React from "react";
import {
  Typography,
  Grid,
  ButtonGroup,
  Button,
  TextField,
} from "@mui/material";

import FILTER_TYPE_ROOMS from "../../constants/filtersRoom";

import actionCreators from "../../redux/rooms/actionCreators";
import { useSelector } from "react-redux";
import {
  selectCurrentFilterRooms,
  selectSearchQueryStringRooms,
} from "../../redux/rooms/roomsSelectors";

const FilterRooms = () => {
  const currentFilterType = useSelector(selectCurrentFilterRooms);
  const curentFilterText = useSelector(selectSearchQueryStringRooms);
  const { roomsFilterChange, roomsQuerySearchChange } = actionCreators;
  return (
    <Grid container>
      <Grid item xs={12} md={5}>
        <TextField
          onChange={({ target: { value } }) => roomsQuerySearchChange(value)}
          value={curentFilterText}
          variant="outlined"
          label="искать по названию комнаты"
          fullWidth
        ></TextField>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography sx={{ mr: 2 }}>Сортировать по:</Typography>
        <ButtonGroup variant="outlined" fullWidth>
          <Button
            sx={{ py: 0 }}
            onClick={() => roomsFilterChange(FILTER_TYPE_ROOMS.PRICE)}
            variant={
              currentFilterType === FILTER_TYPE_ROOMS.PRICE
                ? "contained"
                : "outlined"
            }
          >
            Цена
          </Button>
          <Button
            sx={{ py: 0 }}
            variant={
              currentFilterType === FILTER_TYPE_ROOMS.RATING
                ? "contained"
                : "outlined"
            }
            onClick={() => roomsFilterChange(FILTER_TYPE_ROOMS.RATING)}
          >
            Рейтинг
          </Button>
          <Button
            sx={{ py: 0 }}
            variant={
              currentFilterType === FILTER_TYPE_ROOMS.FREE_PLACES
                ? "contained"
                : "outlined"
            }
            onClick={() => roomsFilterChange(FILTER_TYPE_ROOMS.FREE_PLACES)}
          >
            СВободных мест
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default FilterRooms;
