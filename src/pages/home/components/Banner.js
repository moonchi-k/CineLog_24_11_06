import styled from "styled-components";
// import { mainStyle } from "../../../GlobalStyled";
import { ORIGINAL_URL, W500 } from "../../../constant/ImgUrl";

const Wrap = styled.div`
  /* padding: 0 200px; */
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
    cover;
  filter: blur(10px);
`;

const MainBanner = styled.section`
  height: 80vh;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  /* position: relative; */
  @media screen and (min-width: 450px) {
    padding: 0;
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
`;

const CoverImg = styled.div`
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
    cover;
  width: 50%;
  height: 500px;
  /* margin-right: 10px; */
  border-radius: 20px;
  /* filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.2)); */
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

  @media screen and (min-width: 450px) {
    padding: 0 20px;
    /* width: 60%; */

    h3 {
      font-size: 50px;
    }

    p {
      font-size: 18px;
      line-height: 25px;
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
        <CoverImg $coverImg={Data[0]?.backdrop_path}></CoverImg>
        <TitleWrap>
          <h3>{Data[0]?.title}</h3>
          <p>{Data[0]?.overview.slice(0, 100) + "..."}</p>
        </TitleWrap>
      </BannerCon>
    </>
  );
};

export default Banner;
