import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated } from "../../api";
import Loading from "../../components/Loading";
import Banner from "./components/Banner";
import styled from "styled-components";

import "swiper/css";
import Movies from "./components/Movies";

import PageTitle from "../../components/PageTitle";
// import useScrollTop from "../../lib/useScrollTop";

const Wrap = styled.div`
  position: relative;
  top: -7vh;
`;
const Review = styled.div`
  /* position: absolute;
  bottom: 50px;
  .reviewbox {
  } */
  padding: 0 200px;
  font-weight: 700;
  .title {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

const ReviewBox = styled.div`
  display: flex;
  justify-content: space-between;
  .reviewbox {
    background-color: #ffffff;
    width: 19%;
    height: 370px;
    opacity: 0.1;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setupData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //   useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const { results: now } = await nowPlaying();
        const { results: pop } = await popular();
        const { results: top } = await topRated();

        setNowData(now);
        setPopData(pop);
        setTopData(top);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(nowData);
  console.log(popData);
  console.log(topData);
  console.log(upData);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title="Home"></PageTitle>
          <Banner Data={nowData} />
          {nowData && (
            <Wrap>
              <Review>
                <div className="title">Reviews</div>
                <ReviewBox>
                  <div className="reviewbox"></div>
                  <div className="reviewbox"></div>
                  <div className="reviewbox"></div>
                  <div className="reviewbox"></div>
                  <div className="reviewbox"></div>
                </ReviewBox>
              </Review>
              <Movies data={nowData} title={"Now Playing"}></Movies>
              <Movies data={popData} title={"Popular"}></Movies>
              <Movies data={topData} title={"Top Ranked"}></Movies>
            </Wrap>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
