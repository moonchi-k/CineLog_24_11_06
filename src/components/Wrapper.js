import { mainStyle } from "../GlobalStyled";
import styled from "styled-components";

const Container = styled.div`
  padding: 100px 200px;
`;

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;