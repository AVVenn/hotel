import React from "react";
import { contacts } from "../../constants/contacts";
import { Container } from "../../components/common/CustomBoxes";
import { Title } from "../../components/common/Title";
import {
  TypographyLeft,
  TypographyLeftTitle,
} from "../../components/common/TypographyLeft";

import { Typography } from "@mui/material";

const Rules = () => {
  return (
    <Container sx={{ px: 5 }}>
      <Typography component="h2" variant="h2" sx={{ mb: 3 }}>
        Правила оформления заказа
      </Typography>
      <TypographyLeftTitle component="h3" variant="h3">
        Регистрация
      </TypographyLeftTitle>
      <TypographyLeft sx={{ mb: 2 }}>
        Если вы впервые пользуетесь сервисом онлайн-заказа, вам необходимо
        пройти процесс регистрации, который займет не более 1 минуты.
      </TypographyLeft>
      <TypographyLeft sx={{ mb: 2 }}>
        Перейдите в раздел Регистрация и заполните предложенные поля:
      </TypographyLeft>
      <ul>
        <li>Номер телефона с кодом оператора</li>
        <li>Фамилия</li>
        <li>Имя</li>
        <li>E-mail</li>
        <li>Придумайте пароль для постоянного входа в систему</li>
      </ul>
      <TypographyLeft sx={{ mb: 2 }}>
        После этого регистрация завершена!
      </TypographyLeft>
      <TypographyLeft sx={{ mb: 2 }}>
        В личном кабинете отображается вся информация о ваших бронях, их
        история.
      </TypographyLeft>
      <TypographyLeftTitle align="left" component="h3" variant="h3">
        Бронирование места
      </TypographyLeftTitle>
      <TypographyLeft sx={{ mb: 2 }}>
        Для бронирования, изначально необходимо выбрать дату приезда, количество
        мест (за один раз разрешена бронь до 4х человек). Бронирование доступно
        не раньше, чем за 14 суток до момента заезда.
      </TypographyLeft>
      <TypographyLeft sx={{ mb: 2 }}>
        {`При необходимости заказа большего количества мест, пожалуйста, свяжитесь
        с заведующим общежития ${contacts.PHONE_ZAVEDYUSHIY_MOBILE}`}
      </TypographyLeft>
      <Title sx={{ mb: 2 }}>
        Наличие брони в вкладке брони профиля гарантирует, что ваш заказ
        отображен в системе.
      </Title>
      <TypographyLeftTitle component="h3" variant="h3">
        Отмена заказа
      </TypographyLeftTitle>
      <TypographyLeft sx={{ mb: 2 }}>
        Отмена заказа онлайн производится нажатием на кнопку "Отменить заказ"
        (статус заказа «Заказ отменен»), либо через звонок.
      </TypographyLeft>
      <Title sx={{ mb: 2 }}>
        Важно! Отмена заказа желательна не позднее, чем за 12 часов до даты
        прибытия!
      </Title>
    </Container>
  );
};

export default Rules;
