import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, BoxCenter } from "../../components/common/CustomBoxes";
import {
  Typography,
  Grid,
  CardMedia,
  CardActionArea,
  CardContent,
  Card,
  Rating,
  Chip,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { BoxSpaceAround } from "../../components/common/CustomBoxes";
import { CustomGrid } from "../../components/common/CustomGrid";
const rooms = [
  {
    id: 1,
    title: "4х местная комната",
    price: 8,
    places: 40,
    rating: 4,
    image: "https://source.unsplash.com/random",
    facility: ["Чайник", "Постельное", "Wi-fi"],
  },
  {
    id: 2,
    title: "3х местная комната",
    price: 11,
    places: 12,
    rating: 5,
    image: "https://source.unsplash.com/random",
    facility: ["Чайник", "Постельное", "Холодильник", "Wi-fi"],
  },
  {
    id: 3,
    title: "2х местная комната",
    price: 13,
    places: 2,
    rating: 5,
    image: "https://source.unsplash.com/random",
    facility: ["Чайник", "Постельное", "Холодильник", "Телевизор", "Wi-fi"],
  },
  {
    id: 4,
    title: "2х местная комната",
    price: 15,
    places: 2,
    rating: 5,
    image: "https://source.unsplash.com/random",
    facility: [
      "Чайник",
      "Постельное",
      "Холодильник",
      "Телевизор",
      "Wi-fi",
      "Блочный тип",
    ],
  },
];

const RoomsPage = () => {
  return (
    <Container>
      <BoxCenter sx={{ mb: 3 }}>
        <MeetingRoomIcon sx={{ mr: 2 }} />
        <Typography component="h2" variant="h2">
          Наши комнаты
        </Typography>
      </BoxCenter>
      <CustomGrid container spacing={4}>
        {rooms.map((room) => (
          <Grid item xs={12} sm={6} key={room.id}>
            <CardActionArea component={RouterLink} to={`/rooms/${room.id}`}>
              <Card
                sx={{
                  borderRadius: "20px",
                  border: "1px solid orange",
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={room.image}
                  alt="room.image"
                />
                <CardContent>
                  <Typography component="h3" variant="h3" sx={{ mb: 2.5 }}>
                    {room.title}
                  </Typography>
                  <BoxCenter sx={{ mb: 2 }}>
                    <Typography sx={{ mr: 2 }}>Рейтинг:</Typography>
                    <Rating name="read-only" value={room.rating} readOnly />
                    <Typography variant="caption">
                      {room.rating.toFixed(1)}
                    </Typography>
                  </BoxCenter>
                  <Grid container sx={{ mb: 3 }}>
                    {room.facility.map((item) => (
                      <Grid item>
                        <Chip
                          label={item}
                          icon={<DoneIcon color="success.main" />}
                          variant="outlined"
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <BoxSpaceAround>
                    <Typography
                      color="error.main"
                      sx={{ fontWeight: 600 }}
                    >{`Осталось мест: ${room.places}`}</Typography>
                    <Typography
                      sx={{ fontWeight: 600, color: "text.warning" }}
                    >{`Цена: ${room.price} руб.`}</Typography>
                  </BoxSpaceAround>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </CustomGrid>
    </Container>
  );
};

export default RoomsPage;
