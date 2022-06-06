import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, BoxCenter } from "../../components/common/CustomBoxes";
import {
  Typography,
  Grid,
  CardActionArea,
  CardContent,
  Card,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { TypographyLeft } from "../../components/common/TypographyLeft";

const RoomsPage = () => {
  return (
    <Container sx={{ px: 5 }}>
      <BoxCenter sx={{ mb: 3 }}>
        <NewspaperIcon sx={{ mr: 2 }} />
        <Typography component="h2" variant="h2">
          Новости
        </Typography>
      </BoxCenter>
      <Grid container spacing={3}>
        {news.map((newsItem) => (
          <Grid item xs={12} ssm={6} sm={4} md={4} key={newsItem.id}>
            <CardActionArea component={RouterLink} to={`/news/${newsItem.id}`}>
              <Card sx={{ backgroundColor: "primary.main" }}>
                <CardContent sx={{ m: "0 auto", p: "2 1" }}>
                  <BoxCenter
                    sx={{
                      mb: 3,
                      width: "130px",
                      backgroundColor: "third.main",
                      borderRadius: "15px",
                    }}
                  >
                    <Typography color="text.second" variant="subtitle2">
                      {newsItem.date}
                    </Typography>
                  </BoxCenter>
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
        ))}
      </Grid>
    </Container>
  );
};

export default RoomsPage;
