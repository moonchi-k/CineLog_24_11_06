import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title> {title || "CineLog"} </title>
    </Helmet>
  );
};

export default PageTitle;
