import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, BoxCenter } from "../../components/common/CustomBoxes";
import { format } from "date-fns";
import {
  Typography,
  Grid,
  CardActionArea,
  CardContent,
  Card,
  TextField,
} from "@mui/material";

import { TypographyLeft } from "../../components/common/TypographyLeft";
import { TypographyForNews } from "../../components/common/TypographyForNews";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSelectors";

const News = () => {
  const user = useSelector(selectUser);

  return (
    <Grid container spacing={3}>
      {user.details.booking.length === 0 ? (
        <Grid item xs={12}>
          <Typography sx={{ mt: 2 }} variant="h2">
            Броней не найдено
          </Typography>
        </Grid>
      ) : (
        user.details.booking.map((bookingItem, index) => (
          <Grid
            item
            xs={12}
            ssm={6}
            sm={4}
            md={4}
            key={bookingItem?.reservationId || index}
          >
            <CardActionArea
              component={RouterLink}
              to={`/news/${bookingItem.reservationId}`}
            >
              <Card
                sx={{
                  backgroundColor: "primary.main", //фурмула
                  minHeight: "200px",
                }}
              >
                <CardContent>
                  <TypographyForNews variant="subtitle2">
                    {format(new Date(bookingItem.dateStart), "dd.MM.yyyy")}
                  </TypographyForNews>
                  <TypographyLeft
                    component="h4"
                    variant="h4"
                    color="text.second"
                  >
                    {/* {newsItem.title} */}
                  </TypographyLeft>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default News;
