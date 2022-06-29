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
    avatar: "https://i.imgur.com/GzZAVFv.png",
    name: "Honil Cristina Barinas Nuñez",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perspiciatis at voluptates quod, facere odio! Veritatis distinctio ullam commodi quisquam nam unde natus, harum qui fugit fuga minima sit alias!",
  },
  {
    id: 2,
    avatar: "https://i.imgur.com/GzZAVFv.png",
    name: "Honil Cristina Barinas Nuñez",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perspiciatis at voluptates quod, facere odio! Veritatis distinctio ullam commodi quisquam nam unde natus, harum qui fugit fuga minima sit alias!",
  },
  {
    id: 3,
    avatar: "https://i.imgur.com/GzZAVFv.png",
    name: "Honil Cristina Barinas Nuñez",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perspiciatis at voluptates quod, facere odio! Veritatis distinctio ullam commodi quisquam nam unde natus, harum qui fugit fuga minima sit alias!",
  },
  {
    id: 4,
    avatar: "https://i.imgur.com/GzZAVFv.png",
    name: "Honil Cristina Barinas Nuñez",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perspiciatis at voluptates quod, facere odio! Veritatis distinctio ullam commodi quisquam nam unde natus, harum qui fugit fuga minima sit alias!",
  },
  {
    id: 5,
    avatar: "https://i.imgur.com/GzZAVFv.png",
    name: "Honil Cristina Barinas Nuñez",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perspiciatis at voluptates quod, facere odio! Veritatis distinctio ullam commodi quisquam nam unde natus, harum qui fugit fuga minima sit alias!",
  },
  {
    id: 6,
    avatar: "https://i.imgur.com/GzZAVFv.png",
    name: "Honil Cristina Barinas Nuñez",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perspiciatis at voluptates quod, facere odio! Veritatis distinctio ullam commodi quisquam nam unde natus, harum qui fugit fuga minima sit alias!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What people says</h5>
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
