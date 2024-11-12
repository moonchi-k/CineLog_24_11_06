import styled from "styled-components";
import { Link } from "react-router-dom";
// import { mainStyle } from "../../../GlobalStyled";
import { ORIGINAL_URL, W500 } from "../../../constant/ImgUrl";

const Wrap = styled.div`
  /* padding: 0 200px; */
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
    cover;
  filter: blur(10px);
  /* position: relative; */
`;

const MainBanner = styled.section`
  height: 65vh;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  /* position: relative; */
  @media screen and (max-width: 700px) {
    height: 75vh;
  }
  @media screen and (max-width: 400px) {
    height: 60vh;
  }
`;

const BannerCon = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  justify-content: space-around;
  z-index: 400;
  top: 15%;
  padding: 0 200px;
  /* left: 20%; */
  /* transform: translateX(50%); */

  @media screen and (max-width: 700px) {
    top: 15%;
  }

  a {
    background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat
      center / cover;
    width: 50%;
    height: 500px;
    /* margin-right: 10px; */
    border-radius: 20px;

    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    /* display: block; */
    padding: 0 100px;
    /* top: 100px; */
    flex-direction: column;
  }
  @media screen and (max-width: 400px) {
    display: block;
    padding: 0 20px;
    top: 100px;
  }
`;

const CoverImg = styled.div`
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
    cover;
  width: 100%;
  height: 500px;
  /* margin-right: 10px; */
  border-radius: 20px;
  /* filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.2)); */
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.01);
  }
  @media screen and (max-width: 700px) {
    width: 100%;

    .box {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0.1) 100%
      );

      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
`;

const TitleWrap = styled.div`
  width: 45%;
  margin-top: 80px;
  /* position: absolute;
  z-index: 300; */
  /* bottom: 150px;
  left: 50%;  */
  color: #fff;
  /* padding: 0 200px; */

  h3 {
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    opacity: 0.7;
    font-weight: 300;
  }

  .btn {
    width: 150px;
    background-color: #ffffff;
    opacity: 0.7;
    color: #666;
    padding: 10px;
    text-align: center;
    border-radius: 80px;
    margin-top: 70px;

    @media screen and (max-width: 700px) {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    margin-top: 30px;
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    padding: 0 20px;
    width: 100%;
    margin-top: 20px;
    position: relative;
    top: -180px;
    text-align: center;
    h3 {
      font-size: 40px;
    }

    p {
      display: none;
    }

    .btn {
      width: 80px;
      margin-top: 25px;
      border: 1px solid #d9d9d9;
      padding: 10px;
      border-radius: 20px;
      position: relative;
      left: 50%;
      transform: translate(-50%);
    }
  }
`;
const Banner = ({ Data }) => {
  //   const [nowData, setNowData] = useState();

  return (
    <>
      <Wrap $coverImg={Data[0]?.backdrop_path}>
        <MainBanner>{/* <BackDrop></BackDrop> */}</MainBanner>
      </Wrap>
      <BannerCon>
        <Link to={`/detail/${Data[0].id}`}>
          <CoverImg $coverImg={Data[0]?.backdrop_path}>
            <div className="box"></div>
          </CoverImg>
        </Link>

        <TitleWrap>
          <h3>{Data[0]?.title}</h3>
          <p>{Data[0]?.overview.slice(0, 100) + "..."}</p>
          <Link to={`/detail/${Data[0].id}`}>
            <div className="btn">Detail</div>
          </Link>
        </TitleWrap>
      </BannerCon>
    </>
  );
};

export default Banner;
