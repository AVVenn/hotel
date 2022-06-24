import { Typography } from "@mui/material";
import React from "react";
import { Card, CardMedia, CardContent, Grid } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "../../components/common/CustomBoxes";
import {
  settingsForSlider,
  imagesForGallery,
} from "../../constants/forGallery";

const Gallery = () => {
  return (
    <Container width="90vw" sx={{ mx: "auto" }}>
      <Typography sx={{ mb: 4 }} component="h2" variant="h2">
        Наше здание
      </Typography>
      <Slider {...settingsForSlider}>
        {imagesForGallery.map((image, index) => (
          <Card sx={{ borderRadius: "15px" }} key={image.title}>
            <CardMedia
              component="img"
              height="520"
              image={image.img}
              alt={`img${index}`}
            />
            <CardContent sx={{ p: 1 }}>
              <Typography variant="h6">{image.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default Gallery;
