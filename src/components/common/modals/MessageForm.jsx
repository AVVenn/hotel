import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Textfield from "../FormsUI/Textfield";

export default function MesageForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Ваши пожелания
      </Typography>
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12}>
          <Textfield
            id="cardName"
            label="Напишите пожелания"
            fullWidth
            multiline
            rows={10}
            name="message"
          />
        </Grid>
      </Grid>
    </>
  );
}
