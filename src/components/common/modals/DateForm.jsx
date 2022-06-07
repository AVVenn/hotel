import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ru } from "date-fns/locale";
import { addDays, compareDesc } from "date-fns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function AddressForm() {
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
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            type="firstName"
            name="firstName"
            label="Имя"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="lastName"
            id="lastName"
            name="lastName"
            label="Фамилия"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="number"
            id="phone"
            name="phone"
            label="Телефон"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            type="email"
            name="email"
            label="Е-mail"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ minWidth: "135px", mr: { xs: 1, sm: 0 } }}>
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
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
