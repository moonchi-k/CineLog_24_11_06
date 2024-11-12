import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../../GlobalStyled";
import { W500 } from "../../../constant/ImgUrl";

const Container = styled.section`
  @media screen and (min-width: 450px) {
    padding: 0 200px;
  }
`;
const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`;
const Con = styled.div`
  img {
    border-radius: 20px;
    display: block;
    height: 370px;
  }
`;

const params = {
  spaceBetween: 50,
  slidesPerView: 3.3,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5,
    },
    640: {
      spaceBetween: 20,
      slidesPerView: 4.5,
    },
    320: {
      spaceBetween: 20,
      slidesPerView: 3.3,
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
