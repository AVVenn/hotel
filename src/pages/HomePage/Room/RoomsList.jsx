import React from "react";
import Room from "./Room";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { BoxCenter, Container } from "../../../components/common/CustomBoxes";
import { ButtonOutlined } from "../../../components/common/Buttons";
import { CustomGrid } from "../../../components/common/CustomGrid";
import { routes } from "../../../constants/routes";
import { selectRooms } from "../../../redux/rooms/roomsSelectors";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const RoomList = () => {
  const rooms = useSelector(selectRooms);

  return (
    <Container>
      <BoxCenter sx={{ flexDirection: "column" }}>
        <Typography sx={{ mb: 4 }} component="h2" variant="h2">
          Комнаты
        </Typography>
        {rooms.length === 0 ? (
          <CircularProgress sx={{ mb: 4 }} />
        ) : (
          <CustomGrid container spacing={2} sx={{ mb: 5 }}>
            {rooms.length &&
              rooms
                .slice(0, 3)
                .map((room, index) => <Room key={room._id} room={room} />)}
          </CustomGrid>
        )}
        <ButtonOutlined
          sx={{ py: 1, px: 5 }}
          component={RouterLink}
          to={routes.ROOMS}
        >
          Все комнаты
        </ButtonOutlined>
      </BoxCenter>
    </Container>
  );
};

export default RoomList;
