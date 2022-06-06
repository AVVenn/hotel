import React from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";
import { BoxCenter, Container } from "../../components/common/CustomBoxes";
import { ButtonContained } from "../../components/common/Buttons";
import { Title } from "../../components/common/Title";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { CustomGrid } from "../../components/common/CustomGrid";
import { TypographyLeft } from "../../components/common/TypographyLeft";
const ContactsPage = () => {
  return (
    <Container sx={{ px: 5 }}>
      <BoxCenter sx={{ mb: 4 }}>
        <PhoneAndroidIcon sx={{ mr: 1 }} />
        <Typography component="h2" variant="h2">
          Контакты
        </Typography>
      </BoxCenter>
      <CustomGrid container spacing={6}>
        <Grid item xs={12} ssm={6} sm={6} md={6}>
          <TypographyLeft variant="h3" sx={{ mb: 3 }}>
            Вахта
          </TypographyLeft>
          <Box sx={{ mb: 3 }}>
            <Title>Телефон:</Title>
            <TypographyLeft>25-24-83</TypographyLeft>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Title>{`График работы: `}</Title>
            <TypographyLeft>Ежедневно, круглосуточно, без обеда</TypographyLeft>
          </Box>
        </Grid>
        <Grid item xs={12} ssm={6} sm={6} md={6}>
          <TypographyLeft variant="h3" sx={{ mb: 3 }}>
            Заведующий общежитием
          </TypographyLeft>
          <Box sx={{ mb: 3 }}>
            <Title>Телефон:</Title>
            <TypographyLeft>22-33-96</TypographyLeft>
            <TypographyLeft>+ 375-33-365-52-04</TypographyLeft>
          </Box>
          <Box>
            <Title>График работы:</Title>
            <TypographyLeft>
              Понедельник-пятница, 8:00-17:00, Обед: 12:30-13:20
            </TypographyLeft>
          </Box>
        </Grid>
        <Grid item xs={12} ssm={12} sm={10} md={6}>
          <TypographyLeft variant="h3" sx={{ mb: 3 }}>
            Приемная директора колледжа
          </TypographyLeft>
          <Box sx={{ mb: 3 }}>
            <Title>Телефон/факс:</Title>
            <TypographyLeft>33-70-02</TypographyLeft>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Title>Email:</Title>
            <TypographyLeft>gtec@bks.by</TypographyLeft>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Title>График работы:</Title>
            <TypographyLeft>
              Понедельник-пятница, 8:00-17:00, Обед: 12:30-13:20
            </TypographyLeft>
          </Box>
        </Grid>
        <Grid item xs={12} ssm={10} sm={10} md={6}>
          <Typography component="h3" variant="h3" sx={{ mb: 3 }}>
            Задать вопрос
          </Typography>
          <form action="">
            <TextField
              variant="outlined"
              label="Ваш вопрос"
              multiline
              rows={5}
              rowMax={10}
              fullWidth
              sx={{ mb: 2 }}
            ></TextField>
            <BoxCenter sx={{ mb: 2 }}>
              <TextField label="Имя" fullWidth variant="outlined"></TextField>
              <TextField label="Email" fullWidth variant="outlined"></TextField>
            </BoxCenter>
            <ButtonContained sx={{ borderRadius: "15px", py: 1.5, px: 4 }}>
              Отправить
            </ButtonContained>
          </form>
        </Grid>
      </CustomGrid>
    </Container>
  );
};

export default ContactsPage;
