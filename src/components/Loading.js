import { FadeLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = () => {
  return (
    <Container>
      <FadeLoader color="crimson" />
    </Container>
  );
};

export default Loading;
