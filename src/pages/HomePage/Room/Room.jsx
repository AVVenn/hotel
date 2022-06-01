import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";

import { ButtonOutlined } from "../../../components/common/Buttons";

import PreviewIcon from "@mui/icons-material/Preview";

const Room = ({ post }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "300px",
          display: "flex",
          borderRadius: "15px",
          border: `2px solid gray`,
          "&:hover": {
            borderColor: "orange",
          },
        }}
      >
        <CardMedia
          sx={{
            width: "60%",
            display: "flex",
            backgroundImage: `${post.image}`,
            backgrounPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          image={post.image}
        />
        <CardContent
          sx={{
            pb: 0,
            p: 1,
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alingItems: "space-around",
          }}
        >
          <Typography
            component="h3"
            variant="h6"
            align="center"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            {post.title}
          </Typography>
          <Typography variant="body1">{post.price} руб. к/место</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Осталось мест:{post.places}
          </Typography>
          <Box sx={{ mb: 1.5 }}>
            <Rating name="read-only" value={post.rating} readOnly />
            <Typography sx={{ "&:MuiTypography-root": { fontSize: "10px" } }}>
              {post.rating.toFixed(1)}
            </Typography>
          </Box>
          <ButtonOutlined
            sx={{
              justifySelf: "center",
              justifyItems: "center",
              p: "12px 20px",
            }}
            endIcon={<PreviewIcon />}
          >
            Смотреть
          </ButtonOutlined>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Room;
