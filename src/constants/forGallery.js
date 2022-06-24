import view1 from "../assets/view1.jpg";
import view2 from "../assets/view2.jpg";
import view3 from "../assets/view3.jpg";
import view4 from "../assets/view4.jpg";
import view5 from "../assets/view5.jpg";
import view6 from "../assets/view6.jpg";
import view7 from "../assets/view7.jpg";
import view8 from "../assets/view8.jpg";
import view9 from "../assets/view9.jpg";
import view10 from "../assets/view10.jpg";

export const imagesForGallery = [
  { img: view1, title: "Со стороны мед.колледжа" },
  { img: view2, title: "Со стороны ул. Кирова" },
  { img: view3, title: "Со сторны ул.Крестьянская" },
  { img: view4, title: "Со стороны мед.колледа 1" },
  // { img: view5, title: "Со сторны ул.Крестьянская2" },
  // { img: view6, title: "Со стороны мед.колледа 3" },
  { img: view7, title: "От входа в общежитие" },
  { img: view8, title: "Коридор" },
  { img: view9, title: "Галадильная комната" },
  { img: view10, title: "Гладильная комната 1" },
];

export const settingsForSlider = {
  focusOnSelect: true,
  lazyLoad: false,
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
