import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "../../constants/routes";
import { Container } from "../../components/common/CustomBoxes";
import { Grid, CardContent, Card } from "@mui/material";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
import { TypographyLeft } from "../../components/common/TypographyLeft";
import { TypographyForNews } from "../../components/common/TypographyForNews";
import { ButtonContainedForNews } from "../../components/common/Buttons";

const news = {
  title: "Собирайте смайлы и оплачивайте поездки бонусами!",
  date: "29.03.2022",
  body: `Смайлы - это бонусные баллы, начисленные пассажиру за совершенные поздки, а также за привлечение друзей путем  отравки промокода. Смайлы начисляются только при онлайн бронировании на сайте 618.by и приложение SMILEBUS, при условии успешной поездки. Внимание! Оплата накопленными смайлами возможна только в приложении SMILEBUS! 100 смайлов = 1 BYN 
  Как накопить смайлы? 1. Бронируйте билеты онлайн через мобильное приложение или сайт. За каждую успешную поездку вам будут начисляться смайлы. Количество начисленных смайлов за поездку зависит от маршрута, на котором действует бонусная программа и стоимости поездки.  
  2. Делитесь своим промокодом и приглашайте друзей в Smilebus.  
Как использовать смайлы? 
Смайлами можно оплачивать любые поездки в Smilebus. Для оплаты поездки, вы должны располагать необходимым количеством смайлов на счете. Частичная оплата билета смайлами невозможна.
Смайлы - это бонусные баллы, начисленные пассажиру за совершенные поздки, а также за привлечение друзей путем  отравки промокода. Смайлы начисляются только при онлайн бронировании на сайте 618.by и приложение SMILEBUS, при условии успешной поездки. Внимание! Оплата накопленными смайлами возможна только в приложении SMILEBUS! 100 смайлов = 1 BYN 
  Как накопить смайлы? 1. Бронируйте билеты онлайн через мобильное приложение или сайт. За каждую успешную поездку вам будут начисляться смайлы. Количество начисленных смайлов за поездку зависит от маршрута, на котором действует бонусная программа и стоимости поездки.  
  2. Делитесь своим промокодом и приглашайте друзей в Smilebus.  
Как использовать смайлы? 
Смайлами можно оплачивать любые поездки в Smilebus. Для оплаты поездки, вы должны располагать необходимым количеством смайлов на счете. Частичная оплата билета смайлами невозможна.
Смайлы - это бонусные баллы, начисленные пассажиру за совершенные поздки, а также за привлечение друзей путем  отравки промокода. Смайлы начисляются только при онлайн бронировании на сайте 618.by и приложение SMILEBUS, при условии успешной поездки. Внимание! Оплата накопленными смайлами возможна только в приложении SMILEBUS! 100 смайлов = 1 BYN 
  Как накопить смайлы? 1. Бронируйте билеты онлайн через мобильное приложение или сайт. За каждую успешную поездку вам будут начисляться смайлы. Количество начисленных смайлов за поездку зависит от маршрута, на котором действует бонусная программа и стоимости поездки.  
  2. Делитесь своим промокодом и приглашайте друзей в Smilebus.  
`,
  id: 1,
};

const News = () => {
  return (
    <Container sx={{ px: 5 }}>
      {/* <BoxCenter sx={{ mb: 3 }}>
        <NewspaperIcon sx={{ mr: 2 }} />
        <Typography component="h2" variant="h2">
          {news.title}
        </Typography>
      </BoxCenter> */}
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
                {news.date}
              </TypographyForNews>
              <TypographyLeft component="h4" variant="h4" color="text.second">
                {news.title}
              </TypographyLeft>
            </CardContent>
          </Card>
          <ButtonContainedForNews component={RouterLink} to={routes.NEWS}>
            Назад
          </ButtonContainedForNews>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TypographyLeft variant="subtitle2">{news.body}</TypographyLeft>
          <ButtonContainedForNews
            component={RouterLink}
            to={routes.NEWS}
            sx={{
              mt: 2,
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
