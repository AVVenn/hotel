import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, BoxCenter } from "../../components/common/CustomBoxes";
import { format } from "date-fns";

import { routes } from "../../constants/routes";

import FilterRooms from "./FilterRooms";
import {
  Typography,
  Grid,
  CardMedia,
  CardActionArea,
  CardContent,
  Card,
  Rating,
  Chip,
  CircularProgress,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import { BoxSpaceAround } from "../../components/common/CustomBoxes";
import { CustomGrid } from "../../components/common/CustomGrid";

import { useSelector } from "react-redux";
import {
  selectOptionsForSearchRoom,
  selectFilteredRooms,
  selectIsLoadingRooms,
  selectRoomsWithFreePlaces,
} from "../../redux/rooms/roomsSelectors";

const RoomsPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const allRooms = useSelector(selectFilteredRooms);
  const isLoadingRooms = useSelector(selectIsLoadingRooms);
  const freePlaces = useSelector(selectRoomsWithFreePlaces);
  const options = useSelector(selectOptionsForSearchRoom);
  const day = format(options.dateStart, "dd.MM.yyyy");
  const filtered = state?.filtered;
  const rooms = filtered && freePlaces ? freePlaces : allRooms;

  return (
    <Container>
      <FilterRooms />
      <BoxCenter sx={{ mb: 3 }}>
        <MeetingRoomIcon sx={{ mr: 2 }} />
        <Typography component="h2" variant="h2">
          Наши комнаты
        </Typography>
      </BoxCenter>
      {isLoadingRooms ? (
        <BoxCenter>
          <CircularProgress />
        </BoxCenter>
      ) : (
        <>
          {rooms.length === 0 ? (
            <Typography sx={{ mt: 2 }} variant="h2">
              Ничего не найдено
            </Typography>
          ) : (
            <>
              <CustomGrid container spacing={4}>
                {rooms.map((room, index) => (
                  <Grid item xs={12} sm={6} key={room._id}>
                    <CardActionArea
                      onClick={() =>
                        navigate(`${routes.ROOMS}/${room._id}`, {
                          state: filtered,
                        })
                      }
                    >
                      <Card
                        sx={{
                          borderRadius: "20px",
                          border: "1px solid orange",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="300"
                          image={room?.photos[0]}
                          alt="room.image"
                        />
                        <CardContent>
                          <Typography
                            component="h3"
                            variant="h3"
                            sx={{ mb: 2.5 }}
                          >
                            {room.name}
                          </Typography>
                          <BoxCenter sx={{ mb: 2 }}>
                            <Typography sx={{ mr: 2 }}>Рейтинг:</Typography>
                            <Rating
                              name="read-only"
                              value={room.rating}
                              readOnly
                            />
                            <Typography variant="caption">
                              {room.rating.toFixed(1)}
                            </Typography>
                          </BoxCenter>
                          <Grid container sx={{ mb: 3 }}>
                            {room.facilities.map((item) => (
                              <Grid item key={item}>
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
                              variant="body2"
                              color="error.main"
                              sx={{ fontWeight: 600 }}
                            >{`На ${day} свободных мест: ${freePlaces[index]?.numberOfPlaces} `}</Typography>
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
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default RoomsPage;
