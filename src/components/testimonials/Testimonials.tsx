import React from "react";
import "./testimonials.css";

// Import Swiper styles
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    id: 1,
    avatar: "https://i.imgur.com/KOW9Xe2.png",
    name: "Honil Cristina Barinas Nuñez",
    review:
      "Multimedia Freelancer, IlustrandoAndo CEO. Trabajar con Rainiery Valerio y llevar a cabo la gestión de un proyecto, ha sido una de las cosas más gratificantes de vivir en el mundo del software, por el sólo hecho de que busca las mejores soluciones y valora el término 'Calidad' , lo cual como todo sabemos hace que aún un simple trabajo, se convierta en una experiencia de creación.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What People Says</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
