import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function PaymentForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Ваши пожелания
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="cardName"
            label="Напишите что-то"
            fullWidth
            multiline
            rows={10}
          />
        </Grid>
      </Grid>
    </>
  );
}
