import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { routes } from "../../constants/routes";

import { Grid, CardContent, Card } from "@mui/material";

import { Container } from "../../components/common/CustomBoxes";
import { TypographyLeft } from "../../components/common/TypographyLeft";
import { TypographyForNews } from "../../components/common/TypographyForNews";
import { ButtonContainedForNews } from "../../components/common/Buttons";

import { format } from "date-fns";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNews } from "../../redux/news/newsSelectors";

const News = () => {
  const { id } = useParams();
  const news = useSelector(selectNews);
  const newsItem = news.find((item) => item._id === id);
  return (
    <Container sx={{ px: 5 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Card sx={{ backgroundColor: "primary.main" }}>
            <CardContent>
              <TypographyForNews variant="subtitle2">
                {format(new Date(newsItem.createdAt), "dd.MM.yyyy")}
              </TypographyForNews>
              <TypographyLeft component="h4" variant="h4" color="text.second">
                {newsItem.title}
              </TypographyLeft>
            </CardContent>
          </Card>
          <ButtonContainedForNews
            sx={{ mt: 3 }}
            component={RouterLink}
            to={routes.NEWS}
          >
            Назад
          </ButtonContainedForNews>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TypographyLeft variant="h6">{newsItem.description}</TypographyLeft>
          <ButtonContainedForNews
            component={RouterLink}
            to={routes.NEWS}
            sx={{
              mt: 4,
              display: { xs: "block", sm: "none" },
            }}
          >
            Назад
          </ButtonContainedForNews>
        </Grid>
      </Grid>
    </Container>
  );
};

export default News;
