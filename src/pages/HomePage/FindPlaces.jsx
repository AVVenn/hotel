import React, { useState } from "react";

import { ru } from "date-fns/locale";
import { addDays, compareDesc } from "date-fns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { ButtonContained } from "../../components/common/Buttons";
import { BoxCenter } from "../../components/common/CustomBoxes";

const FindPlaces = () => {
  const [numberOfPerson, setNumberOfPerson] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const changeStartDate = (date) => {
    if (endDate && compareDesc(date, endDate) < 1) {
      setEndDate(addDays(date, 1));
    }
    setStartDate(date);
  };

  const changeEndDate = (date) => {
    setEndDate(date);
  };

  return (
    <form>
      <BoxCenter sx={{ flexDirection: { xs: "column", sm: "row" }, px: 1 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
          {/* <BoxCenter>
            <MobileDatePicker
              showDaysOutsideCurrentMonth
              label="Дата приезда"
              inputFormat="dd.MM.yyyy"
              minDate={new Date()}
              maxDate={addDays(new Date(), 20)}
              value={startDate}
              onChange={changeStartDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <MobileDatePicker
              showDaysOutsideCurrentMonth
              label="Дата отъезда"
              inputFormat="dd.MM.yyyy"
              minDate={addDays(startDate, 1)}
              maxDate={addDays(startDate, 50)}
              value={endDate}
              onChange={changeEndDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </BoxCenter> */}
          <BoxCenter sx={{ mb: { xs: 1, sm: 0 } }}>
            <DatePicker
              id="startDate"
              closeOnSelect
              showDaysOutsideCurrentMonth
              mask="__.__.____"
              minDate={new Date()}
              maxDate={addDays(new Date(), 20)}
              label="Дата приезда"
              value={startDate}
              renderInput={(props) => <TextField {...props} />}
              onChange={changeStartDate}
            />
            <DatePicker
              id="endDate"
              closeOnSelect
              showDaysOutsideCurrentMonth
              minDate={addDays(startDate, 1)}
              maxDate={addDays(startDate, 50)}
              mask="__.__.____"
              label="Дата отъезда"
              value={endDate}
              renderInput={(props) => <TextField {...props} />}
              onChange={changeEndDate}
            />
          </BoxCenter>
        </LocalizationProvider>
        <BoxCenter sx={{ justifyContent: "space-between" }}>
          <FormControl
            sx={{ minWidth: "135px", mr: { xs: 1, sm: 0 } }}
            // fullWidth
          >
            <InputLabel>Кол-во человек</InputLabel>
            <Select
              id="numberOfPerson"
              value={numberOfPerson}
              label="Кол-во человек"
              onChange={({ target: { value } }) => {
                setNumberOfPerson(value);
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
          <ButtonContained sx={{ py: 2, px: 7 }}>Найти</ButtonContained>
        </BoxCenter>
      </BoxCenter>
    </form>
  );
};

export default FindPlaces;
