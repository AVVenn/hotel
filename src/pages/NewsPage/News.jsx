import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, BoxCenter } from "../../components/common/CustomBoxes";
import { Typography, Grid, CardContent, Card } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { TypographyLeft } from "../../components/common/TypographyLeft";

const news = {
  title: "Собирайте смайлы и оплачивайте поездки бонусами!",
  date: "29.03.2022",
  body: `Смайлы - это бонусные баллы, начисленные пассажиру за совершенные поздки, а также за привлечение друзей путем  отравки промокода. Смайлы начисляются только при онлайн бронировании на сайте 618.by и приложение SMILEBUS, при условии успешной поездки. Внимание! Оплата накопленными смайлами возможна только в приложении SMILEBUS! 100 смайлов = 1 BYN 
  Как накопить смайлы? 1. Бронируйте билеты онлайн через мобильное приложение или сайт. За каждую успешную поездку вам будут начисляться смайлы. Количество начисленных смайлов за поездку зависит от маршрута, на котором действует бонусная программа и стоимости поездки.  
  2. Делитесь своим промокодом и приглашайте друзей в Smilebus.  
Как использовать смайлы? 
Смайлами можно оплачивать любые поездки в Smilebus. Для оплаты поездки, вы должны располагать необходимым количеством смайлов на счете. Частичная оплата билета смайлами невозможна.`,
  id: 1,
};

const News = () => {
  return (
    <Container sx={{ px: 5 }}>
      <BoxCenter sx={{ mb: 3 }}>
        <NewspaperIcon sx={{ mr: 2 }} />
        <Typography component="h2" variant="h2">
          {news.title}
        </Typography>
      </BoxCenter>
      <Grid container spacing={3}>
        <Grid item xs={12} ssm={6}>
          <Card>
            <CardContent sx={{ m: "0 auto", p: "2 1" }}>
              sx=
              {{
                mb: 3,
                width: "130px",
                backgroundColor: "third.main",
                borderRadius: "15px",
              }}
              <TypographyLeft color="text.second" variant="subtitle2">
                {news.date}
              </TypographyLeft>
              <TypographyLeft color="text.second" variant="subtitle2">
                {news.body}
              </TypographyLeft>
              <TypographyLeft color="text.second" variant="subtitle2">
                {news.body}
              </TypographyLeft>
              <TypographyLeft color="text.second" variant="subtitle2">
                {news.body}
              </TypographyLeft>
              <TypographyLeft color="text.second" variant="subtitle2">
                {news.body}
              </TypographyLeft>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default News;
