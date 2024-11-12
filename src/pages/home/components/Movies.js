import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../../GlobalStyled";
import { W500 } from "../../../constant/ImgUrl";

const Container = styled.section`
  padding: 0 200px;
  @media screen and (max-width: 700px) {
    padding: 100px;
  }
  @media screen and (max-width: 450px) {
    padding: 20px;
  }
`;
const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`;
const Con = styled.div`
  img {
    border-radius: 20px;
    display: block;
    height: 20%;
    transition-duration: 0.3s;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

const params = {
  spaceBetween: 50,
  slidesPerView: 5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5,
    },
    640: {
      spaceBetween: 20,
      slidesPerView: 3.3,
    },
    320: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },
};

const Movies = ({ data, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Swiper {...params}>
        {data.map((movie) => (
          <SwiperSlide>
            <Con>
              <Link to={`/detail/${movie.id}`}>
                <img src={W500 + movie.poster_path} alt={movie.title} />
              </Link>
            </Con>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;
