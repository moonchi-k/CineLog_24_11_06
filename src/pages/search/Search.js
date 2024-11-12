import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { searchMovie } from "../../api";
import { useState } from "react";
import { W500, noImg } from "../../constant/ImgUrl";
import PageTitle from "../../components/PageTitle";

const ConWrap = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 70px;
  column-gap: 50px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 50px;
    column-gap: 30px;
  }
`;
const Con = styled.div`
  a {
    color: white;
  }
  /* background-color: lightblue; */
  h3 {
    margin-top: 10px;
    font-size: 18px;
  }
  height: 415px;
  @media screen and (max-width: 1024px) {
    height: 300px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
const Form = styled.form`
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    border-radius: 50px;
    padding: 0 20px;
    &::placeholder {
      font-size: 18px;
    }
  }
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: white;
`;

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [term, setTerm] = useState();

  const onSearch = async (data) => {
    console.log("ttt");
    const { search: keyword } = data;

    try {
      const { results } = await searchMovie(keyword);
      console.log(results);
      setTerm(results);
    } catch (error) {
      console.log("error: " + error);
    }
  };

  return (
    <>
      <PageTitle title="Search"></PageTitle>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSearch)}>
          <input
            {...register("search", {
              required: "영화 제목은 필수입니다.",
            })}
            type="text"
            placeholder="영화 제목을 입력하세요."
          />
        </Form>
        {/* <Text> "{term}" 에 대한 검색결과...</Text> */}
        {term && (
          <ConWrap>
            {term.map((data) => (
              <Con key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <img
                    src={data.poster_path ? W500 + data.poster_path : noImg}
                    alt={data.title}
                  />
                  <h3>{data.title}</h3>
                </Link>
              </Con>
            ))}
          </ConWrap>
        )}
      </Wrapper>
    </>
  );
};

export default Search;
