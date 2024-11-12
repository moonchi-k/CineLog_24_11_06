import styled from "styled-components";

const WReviewBox = styled.div`
  margin-top: 30px;
  position: relative;
  /* padding: 0 110px; */
  .title {
    /* margin-bottom: 20px; */
    height: 16px;
    /* padding: 10px; */
    text-align: center;
    /* background-color: #d9d9d9; */
  }
  .box {
    margin-top: 10px;
    margin-bottom: 30px;
    border-radius: 10px;
    opacity: 0.5;
    margin: 0 auto;
    width: 100%;
    height: 50px;
    background-color: #d9d9d9;
  }
  button {
    all: unset;
    font-size: 14px;
    /* padding-top: -10px; */
  }
`;

const Register = styled.div`
  display: flex;
  height: 36px;
  justify-content: space-between;
  align-items: center;
`;
const ReviewList = styled.div`
  padding-top: 20px;
`;

const ReviewBox = () => {
  return (
    <>
      <WReviewBox>
        <Register>
          <div className="title">Review</div>
          <button> 등록하기 </button>
        </Register>
        <form>
          <input
            className="box"
            type="text"
            placeholder="리뷰를 등록해주세요. 🤗"
          ></input>
        </form>
      </WReviewBox>
      <ReviewList>
        <div className="title">Recent Reviews</div>
        <div className="list"></div>
      </ReviewList>
    </>
  );
};

export default ReviewBox;
