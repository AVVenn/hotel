import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";
import { ru } from "date-fns/locale";
import { addDays, compareDesc } from "date-fns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { BoxCenter } from "../../components/common/CustomBoxes";

import numberPeople from "../../constants/dataNumbersPeople.json";

import { ButtonContained } from "../../components/common/Buttons";

const FindPlaces = () => {
  const [numberOfPerson, setNumberOfPerson] = useState(1);
  const [dataStart, setDataStart] = useState(new Date());
  const [dataEnd, setDataEnd] = useState(addDays(new Date(), 1));

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
    const obj = { dataStart, dataEnd, numberOfPerson };
    console.log(obj);
    return obj;
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

// <DatePicker
// id="startDate"
// closeOnSelect
// showDaysOutsideCurrentMonth
// mask="__.__.____"
// minDate={new Date()}
// maxDate={addDays(new Date(), 20)}
// label="Дата приезда"
// value={startDate}
// renderInput={(props) => <TextField {...props} />}
// onChange={changeStartDate}
// />

{
  /* <DatePicker
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
/> */
}

// <BoxCenter sx={{ mb: { xs: 1, sm: 0 } }}>
// <DatePicker
//   id="startDate"
//   closeOnSelect
//   showDaysOutsideCurrentMonth
//   mask="__.__.____"
//   minDate={new Date()}
//   maxDate={addDays(new Date(), 20)}
//   label="Дата приезда"
//   // value={}                                                                                    !
//   name="dataStart"
//   renderInput={(props) => (
//     <DateTimePicker name="dataStart" {...props} />
//   )}
//   onClick={() => console.log(this.props.values.firstName)}
// />
// <DatePicker
//   id="endDate"
//   closeOnSelect
//   showDaysOutsideCurrentMonth
//   // minDate={addDays(values.dataStart, 1)}                                                        !
//   // maxDate={addDays(values.dataStart, 50)}                                                       !
//   mask="__.__.____"
//   label="Дата отъезда"
//   // value={values.dataEnd}                                                                         !
//   renderInput={(props) => (
//     <DateTimePicker name="dataEnd" {...props} />
//   )}
//   // onChange={changeEndDate}
// />
