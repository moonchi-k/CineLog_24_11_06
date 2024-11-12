import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";

import { ORIGINAL_URL, noImg } from "../../constant/ImgUrl";
import PageTitle from "../../components/PageTitle";
import ReviewBox from "./components/ReviewBox";

const DWrapper = styled.div`
  /* padding: 100px 400px; */
  height: 100vh;
  /* width: 100%; */
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) center center /
    cover no-repeat;
  filter: blur(10px);
  /* opacity: 0.5; */
`;
const BgContainer = styled.div`
  height: 100vh;
  padding: 150px 30%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  /* display: flex; */
  width: 100%;
  /* justify-content: space-between; */
  /* opacity: 0.5; */
  position: absolute;
  top: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  /* padding: 150px 400px 0 400px; */
  display: flex;
  margin: 0 auto;
`;

const Bg = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  margin-right: 50px;
`;
const TitleWrap = styled.div`
  color: white;
  width: 50%;
  h3 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  span {
    font-size: 18px;
    font-weight: 300;
  }
  ul {
    list-style: disc;
    margin: 15px 0px 10px 20px;

    li {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 18px;
    line-height: 30px;
    margin-top: 50px;
    opacity: 0.7;
    letter-spacing: 0;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const [Data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setData(detailData);
        setIsLoading(false);
      } catch (error) {}
    })();
  }, [id]);

  movieDetail();

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <>
          <PageTitle title={Data.title}></PageTitle>
          <DWrapper $coverImg={Data.backdrop_path}></DWrapper>{" "}
          <BgContainer>
            <Container>
              <Bg
                style={{
                  background: `url(${
                    Data.poster_path ? ORIGINAL_URL + Data.poster_path : noImg
                  }) no-repeat center / cover`,
                }}
              />
              <TitleWrap>
                <h3>{Data.title}</h3>
                <span>{Math.round(Data.vote_average)}점</span> •{" "}
                <span>{Data.runtime}분</span> • <span>{Data.release_date}</span>
                <ul>
                  {Data.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
                <p>{Data.overview}</p>
              </TitleWrap>
            </Container>
            <ReviewBox></ReviewBox>
          </BgContainer>
        </>
      )}
    </>
  );
};

export default Detail;
