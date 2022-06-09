// import React from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Grid,
// } from "@mui/material";

// import { ButtonContainedForModals, ButtonTextForModals } from "../Buttons";

// const SignIn = ({ handleCloseSignIn, handleOpenSignUp, open }) => {
//   const crossSignUp = () => {
//     handleCloseSignIn();
//     handleOpenSignUp();
//   };

//   return (
//     <Dialog onClose={handleCloseSignIn} open={open}>
//       <Grid container spacing={2} sx={{ maxWidth: "450px" }} component="form">
//         <Grid item xs={12}>
//           <DialogTitle variant="h3">Восстановление пароля</DialogTitle>
//         </Grid>
//         <Grid item xs={12}>
//           <DialogContent sx={{ p: "15px 35px" }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} ssm={10}>
//                 <TextField
//                   autoFocus
//                   id="name"
//                   label="Логин"
//                   type="login"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} ssm={10}>
//                 <TextField
//                   id="password"
//                   label="Пароль"
//                   type="password"
//                   fullWidth
//                 />
//               </Grid>
//             </Grid>
//           </DialogContent>
//           <Grid item xs={12}>
//             <DialogActions sx={{ justifyContent: "flex-start", pl: "35px" }}>
//               <ButtonContainedForModals
//                 type="submit"
//                 onClick={handleCloseSignIn}
//                 sx={{ px: 8 }}
//               >
//                 Войти
//               </ButtonContainedForModals>
//             </DialogActions>
//             <Grid item xs={12}>
//               <ButtonTextForModals onClick={() => {}}>
//                 Забыли пароль?
//               </ButtonTextForModals>
//               <ButtonTextForModals onClick={crossSignUp}>
//                 Нет аккаунта? Зарегистрироваться.
//               </ButtonTextForModals>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Dialog>
//   );
// };

// export default React.memo(SignIn);
