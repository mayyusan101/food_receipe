import styled from "styled-components";
import AmericanImg from "../assets/American.webp";
import ItalianImg from "../assets/Italian.jpg";
import TaiImg from "../assets/Tai.jpg";
import KoreaImg from "../assets/Korea.webp";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  return (
    <Wrapper>
      <div className="category_title">
        <h3>Choose a Category</h3>
        {/* <h1>Recipe Categories</h1> */}
      </div>
      <div className="categories_wrapper">
        <Link to={"category/American"}>
          <div className="one_category">
            <img src={AmericanImg} alt="" />
            <h3>American</h3>
          </div>
        </Link>
        <Link to={"category/Thai"}>
          <div className="one_category">
            <img src={TaiImg} alt="" />
            <h3>Thai</h3>
          </div>
        </Link>
        <Link to={"category/Italian"}>
          <div className="one_category">
            <img src={ItalianImg} alt="" />
            <h3>Italian</h3>
          </div>
        </Link>
        <Link to={"category/Korean"}>
          <div className="one_category">
            <img src={KoreaImg} alt="" />
            <h3>Korea</h3>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: #fff;
  .category_title {
    display: grid;
    place-items: center;
  }
  .category_title h3 {
    color: #fbac19;
  }
  .category_title h3 {
  }
  .categories_wrapper {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    cursor: pointer;
  }
  .one_category {
    width: 100px;
  }
  .one_category h3 {
    text-align: center;
    color: #000;
    font-family: "Dosis", sans-serif;
    font-weight: bold;
  }
  .one_category img {
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    transition: all 0.4s ease;
  }
  .one_category img:hover {
    opacity: 0.8;
    background: rgba(255, 255, 255, 0.36);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    rotate: -20deg;
  }

  @media (max-width: 768px) {
    .categories_wrapper {
      padding: 1rem;
      gap: 10px;
    }
    .one_category {
      width: 100px;
      display: grid;
      place-items: center;
    }
    .one_category img {
      width: 70px;
      height: 70px;
    }
    .one_category h3 {
      text-align: start;
    }
  }
`;
export default CategoriesList;
