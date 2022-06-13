import React, { useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { TypographyLeft } from "../../components/common/TypographyLeft";
import { TypographyForNews } from "../../components/common/TypographyForNews";

import actionCreators from "../../redux/news/actionCreator";
import { useSelector } from "react-redux";
import {
  selectNews,
  selectSearchQueryStringNews,
  selectSortedNews,
  selectLoadingNews,
} from "../../redux/news/newsSelectors";

const News = () => {
  const news = useSelector(selectNews);
  const querySearchString = useSelector(selectSearchQueryStringNews);
  const isLoadingNews = useSelector(selectLoadingNews);
  const { getNews, newsQuerySearchChange } = actionCreators;
  const filteredNews = useSelector(selectSortedNews);
  console.log(filteredNews);
  useEffect(() => {
    if (!news.length) {
      getNews();
    }
  }, []);

  return (
    <Container sx={{ px: 5 }}>
      <BoxCenter sx={{ mb: 3 }}>
        <NewspaperIcon sx={{ mr: 2 }} />
        <Typography component="h2" variant="h2">
          Новости
        </Typography>
      </BoxCenter>
      {isLoadingNews ? (
        <BoxCenter>
          <CircularProgress />
        </BoxCenter>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              fullWidth
              label="Найти новость"
              value={querySearchString}
              onChange={({ target: { value } }) => newsQuerySearchChange(value)}
            />
          </Grid>
          {filteredNews.length === 0 ? (
            <Grid item xs={12}>
              <Typography sx={{ mt: 2 }} variant="h2">
                Ничего не найдено
              </Typography>
            </Grid>
          ) : (
            filteredNews.map((newsItem) => (
              <Grid item xs={12} ssm={6} sm={4} md={4} key={newsItem._id}>
                <CardActionArea
                  component={RouterLink}
                  to={`/news/${newsItem._id}`}
                >
                  <Card
                    sx={{
                      backgroundColor: "primary.main",
                      minHeight: "200px",
                    }}
                  >
                    <CardContent>
                      <TypographyForNews variant="subtitle2">
                        {format(new Date(newsItem.createdAt), "dd.MM.yyyy")}
                      </TypographyForNews>
                      <TypographyLeft
                        component="h4"
                        variant="h4"
                        color="text.second"
                      >
                        {newsItem.title}
                      </TypographyLeft>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
  );
};

export default News;
