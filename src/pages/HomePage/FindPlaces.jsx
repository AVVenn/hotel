import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

import { ru } from "date-fns/locale";
import { addDays, compareDesc } from "date-fns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import numberPeople from "../../constants/dataNumbersPeople.json";

import { BoxCenter } from "../../components/common/CustomBoxes";
import { ButtonContained } from "../../components/common/Buttons";

import actionCreators from "../../redux/rooms/actionCreators";
import { useSelector } from "react-redux";
import { selectOptionsForSearchRoom } from "../../redux/rooms/roomsSelectors";

import { useSnackbar } from "notistack";

const FindPlaces = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { changeOptionsForSearchRoom } = actionCreators;
  const optionsForSearch = useSelector(selectOptionsForSearchRoom);

  const [numberOfPerson, setNumberOfPerson] = useState(
    optionsForSearch.numberOfPerson
  );
  const [dataStart, setDataStart] = useState(optionsForSearch.dateStart);
  const [dataEnd, setDataEnd] = useState(optionsForSearch.dateEnd);

  const changeStartDate = (date) => {
    if (dataEnd && compareDesc(date, dataEnd) < 1) {
      setDataEnd(addDays(date, 1));
    }
    setDataStart(date);
  };

  const changeEndDate = (date) => {
    setDataEnd(date);
  };

  const formHandler = () => {
    if (
      compareDesc(dataStart, dataEnd) === 1 &&
      compareDesc(dataEnd, addDays(dataStart, 50)) > -1 &&
      compareDesc(new Date(), dataStart) > -1 &&
      compareDesc(dataStart, addDays(new Date(), 20)) > -1
    ) {
      changeOptionsForSearchRoom({
        dateStart: dataStart,
        dateEnd: dataEnd,
        numberOfPerson: numberOfPerson,
      });
      navigate(routes.ROOMS, { state: { filtered: true } });
    } else {
      enqueueSnackbar("Введите корректные значения", { variant: "error" });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <BoxCenter sx={{ width: "100%", px: 1 }}>
        <Grid container sx={{ margin: "0 auto", width: "auto" }}>
          <Grid item xs={6} ssm={3}>
            <DatePicker
              fullWidth
              id="startDate"
              closeOnSelect
              showDaysOutsideCurrentMonth
              mask="__.__.____"
              minDate={new Date()}
              maxDate={addDays(new Date(), 20)}
              label="Дата приезда"
              value={dataStart}
              renderInput={(props) => <TextField {...props} />}
              onChange={changeStartDate}
            />
          </Grid>
          <Grid item xs={6} ssm={3} sx={{ mb: { xs: 1, smm: 0 } }}>
            <DatePicker
              id="endDate"
              closeOnSelect
              showDaysOutsideCurrentMonth
              minDate={addDays(dataStart, 1)}
              maxDate={addDays(dataStart, 50)}
              mask="__.__.____"
              label="Дата отъезда"
              value={dataEnd}
              renderInput={(props) => <TextField {...props} />}
              onChange={changeEndDate}
            />
          </Grid>
          <Grid item xs={6} ssm={3}>
            <FormControl fullWidth>
              <InputLabel>Кол-во человек</InputLabel>
              <Select
                id="numberOfPerson"
                value={numberOfPerson}
                label="Кол-во человек"
                onChange={({ target: { value } }) => {
                  setNumberOfPerson(value);
                }}
              >
                {Object.keys(numberPeople).map((item, pos) => (
                  <MenuItem key={pos} value={item}>
                    {numberPeople[item]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} ssm={3}>
            <ButtonContained
              onClick={formHandler}
              type="submit"
              fullWidth
              sx={{ py: 2 }}
            >
              Найти
            </ButtonContained>
          </Grid>
        </Grid>
      </BoxCenter>
    </LocalizationProvider>
  );
};

export default FindPlaces;
