import styled from "styled-components";

const Warn = styled.div`
  font-size: 50px;
  color: crimson;
`;

const PageNotFound = () => {
  return <Warn>[404] PageNotFound</Warn>;
};

export default PageNotFound;
