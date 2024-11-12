import { mainStyle } from "../GlobalStyled";
import styled from "styled-components";

const Container = styled.div`
  padding: 100px 200px;

  @media screen and (max-width: 700px) {
    padding: 100px;
  }

  @media screen and (max-width: 400px) {
    padding: 100px 20px;
  }
`;

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
