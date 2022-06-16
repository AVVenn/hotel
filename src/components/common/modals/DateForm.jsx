import React from "react";
import { Typography, InputAdornment, Grid } from "@mui/material";
import { ru } from "date-fns/locale";
// import { addDays, compareDesc } from "date-fns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { useFormikContext } from "formik";
import Textfield from "../../common/FormsUI/Textfield";
import Select from "../../common/FormsUI/Select";
import numberPeople from "../../../constants/dataNumbersPeople.json";
import DateTimePicker from "../FormsUI/DataTimePicker";

export default function DateForm() {
  // const { id } = useParams();
  // const options = useSelector(selectOptionsForSearchRoom);
  // const freePlacesInRoom = useSelector(selectRoomsWithFreePlaces);
  // const pricePlace = freePlacesInRoom.find((rooms) => rooms._id === id)?.price;

  const { values } = useFormikContext(); // setFieldValue

  const changeStartDate = (date) => {
    // if (values.dateEnd && compareDesc(date, values.dateEnd) < 1) {
    //   setFieldValue("dateEnd", addDays(date, 1));
    // }
    // setFieldValue("dateStart", date);
  };

  const changeEndDate = (date) => {
    // setFieldValue("dateEnd", date);
  };
  console.log(values);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <Typography variant="h6" gutterBottom>
        Введите ваши данные
      </Typography>
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <Textfield required name="firstName" type="text" label="Имя" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Textfield required type="text" name="lastName" label="Фамилия" />
        </Grid>
        <Grid item xs={12} ssm={6} sm={6}>
          <Textfield
            required
            type="number"
            name="phone"
            label="Телефон"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+375</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} ssm={6} sm={6}>
          <Textfield name="email" type="text" label="Е-mail" />
        </Grid>
        <Grid item xs={12} ssm={6} sm={6}>
          <DatePicker
            disabled
            // id="startDate"
            // closeOnSelect
            // showDaysOutsideCurrentMonth
            mask="__.__.____"
            // minDate={new Date()}
            // maxDate={addDays(new Date(), 20)}
            label="Дата приезда"
            value={values.dateStart} //values.dateStart
            name="dateStart"
            renderInput={(props) => (
              <DateTimePicker name="dateStart" disabled {...props} />
            )}
            onChange={changeStartDate}
          />
        </Grid>
        <Grid item xs={12} ssm={6} sm={6}>
          <DatePicker
            disabled
            // id="endDate"
            // closeOnSelect
            // showDaysOutsideCurrentMonth
            // minDate={addDays(values.dateStart, 1)}
            // maxDate={addDays(values.dateStart, 50)}
            mask="__.__.____"
            label="Дата отъезда"
            name="dateEnd"
            value={values.dateEnd}
            renderInput={(props) => (
              <DateTimePicker name="dateEnd" {...props} />
            )}
            onChange={changeEndDate}
          />
        </Grid>
        <Grid item xs={12} ssm={6} sm={6}>
          <Select
            disabled
            name="numberOfPerson"
            label="Кол-во человек"
            options={numberPeople}
            value={values.numberOfPerson}
          />
        </Grid>
        <Grid item xs={12} ssm={6} sm={6}>
          <Textfield
            disabled
            name="placePrice"
            value={values.placePrice}
            label="Место(а) по цене (руб.):"
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
