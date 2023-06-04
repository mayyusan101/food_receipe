import styled from "styled-components";
import SaladImg from "../assets/Salad.jpg";
import DrinkImg from "../assets/Drink.jpg";
import FoodImg from "../assets/Food.jpg";
import AsteriskSVG from "../assets/asterisk-10px-svgrepo-com.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [mainRecipe, setRecipe] = useState([]);

  const getMainReceipe = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=1`);
    const data = await api.json();
    const recipe = data.recipes[0];
    const updateReceipe = { ...recipe, extendedIngredients: recipe.extendedIngredients.slice(0, 6) };
    setRecipe(updateReceipe);
  };

  useEffect(() => {
    getMainReceipe();
  }, []);
  
  const integrents = mainRecipe.extendedIngredients && mainRecipe.extendedIngredients.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <Wrapper>
      <div className="hero_wrapper">
        <Left>
          <h1 className="food_title">
            Food <br /> Receipe
          </h1>
          {mainRecipe && (
            <div className="food_wrapper">
              <div className="food_container">
                <div className="left_circle"></div>
                <div className="middle_circle"></div>
                <div className="right_circle">
                  <div className="connect_line"></div>
                </div>
                <div className="food_image">
                  <img src={mainRecipe.image} alt="" />
                </div>
              </div>
              <div className="menu_wrapper">
                <h3 className="menu_title">Recipe of the day</h3>
                <div className="menu_box">
                  <h3>{mainRecipe.title}</h3>
                  {integrents}
                  <Link to={`receipe/${mainRecipe.id}`}>Read More</Link>
                </div>
              </div>
            </div>
          )}
        </Left>
        <div style={{ width: "2px", backgroundColor: "#000" }} />
        <Right>
          <div className="right_top">
            <div className="item_container">
              <div className="food_item">
                <div className="ripped-text one">
                  <h1>𝓢𝓪𝓵𝓪𝓭</h1>
                </div>
                <div className="connector_line"></div>
                <div className="food_photo">
                  <img src={SaladImg} alt="" />
                </div>
              </div>

              <div className="food_item">
                <div className="ripped-text two">
                  <h1>𝓓𝓻𝓲𝓷𝓴</h1>
                </div>
                <div className="connector_line"></div>
                <div className="food_photo">
                  <img src={DrinkImg} alt="" />
                </div>
              </div>

              <div className="food_item">
                <div className="ripped-text three">
                  <h1>𝓕𝓸𝓸𝓭</h1>
                </div>
                <div className="connector_line"></div>
                <div className="food_photo">
                  <img src={FoodImg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="right_bottom">
            <div className="menu_container">
              <div className="triangle left_curve"></div>
              <div className="triangle right_curve"></div>
              <ul className="lists_container">
                <Link to="/receipes/search/soup">
                  <li> Soups </li>
                </Link>
                <Link to="/receipes/search/salad">
                  <li> Salad </li>
                </Link>
                <Link to="/receipes/search/fish">
                  <li> Fish </li>
                </Link>
                <Link to="/receipes/search/chicken">
                  <li> Chicken </li>
                </Link>
              </ul>
            </div>
            <hr style={{ width: "2px", backgroundColor: "#000", color: "#000" }} />
            <div className="receipe_container">
              <div className="context">
                <div className="asterisk">
                  <img src={AsteriskSVG} alt="" />
                </div>
                <h1>
                  500+ <br></br> receipes all around the world
                </h1>
              </div>
            </div>
          </div>
        </Right>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f1eee9;
  display: grid;
  place-items: center;
  .hero_wrapper {
    display: flex;
    height: calc(100vh - 67px); // (65 px nav height + 2px line height)
    max-width: 1240px;
  }
  @media (max-width: 1024px) {
    display: block;
    .hero_wrapper {
      flex-direction: column;
    }
  }
`;
const Left = styled.div`
  background-color: #f1eee9;
  width: 55%;
  .food_title {
    font-size: 4rem;
    line-height: 1em;
    padding-left: 60px;
    padding-top: 20px;
    font-weight: 400;
    font-family: "Permanent Marker", cursive;
  }
  .connect_line {
    width: 80px;
    height: 2px;
    position: absolute;
    top: 70%;
    right: -15px;
    background-color: #000;
    rotate: -35deg;
    transform: translateX(100%);
    transform-origin: left;
  }
  .food_wrapper {
    display: flex;
    justify-content: start;
    /* background-color: bisque; */
  }
  .food_container {
    margin-top: 10%;
    width: 420px;
    background-color: red;
    position: relative;
    height: max-content;
  }
  .left_circle {
    position: absolute;
    top: 0;
    left: 17%;
    width: 45%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 1.5px solid black;
  }
  .right_circle {
    position: absolute;
    top: 0;
    right: 17%;
    width: 45%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 1.5px solid black;
  }
  .middle_circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 45%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 1.5px solid black;
  }
  /* receipe food image */
  .food_image {
    position: absolute;
    margin-top: 5%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 35%;
    aspect-ratio: 1/1;
  }
  .food_image img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 2px solid #121212;
  }
  /* ==== Receipe Menu Box === */
  .menu_wrapper {
    /* background-color: #D1EF53; */
  }
  .menu_title {
    padding-top: 30px;
    margin-bottom: 10px;
  }
  .menu_box {
    border: 2px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 5px 5px 0px #000;
    max-width: 250px;
  }
  .menu_box li {
    list-style: circle;
    font-size: 1rem;
  }
  .menu_box a {
    text-decoration: underline;
    color: #f98647;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1rem 0rem;
    .food_title {
      font-size: 3rem;
    }
    .food_wrapper {
      justify-content: center;
      flex-wrap: wrap;
    }
    .food_container {
      margin-top: 2rem;
      width: 420px;
      margin-bottom: 180px;
    }
  }
  @media (max-width: 600px) {
    .connect_line {
      height: 0px;
    }
  }
`;
const Right = styled.div`
  width: 45%;
  height: 100%;
  position: relative;
  background-color: #b3a0ce;
  display: flex;
  flex-direction: column;

  .right_top {
    height: 60%;
    width: 100%;
    background-color: #b3a0ce;
    position: relative;
  }

  .item_container {
    padding: 1rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: absolute;
    left: -40px;
    width: 70%;
  }
  /* === Text & Photo === */
  .food_item {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .connector_line {
    /* width: 100px; */
    width: 40%;
    height: 1px;
    background-color: #000;
  }
  .food_item .food_photo {
    min-width: 130px;
    height: 70px;
    border: 1px solid #000;
  }
  .food_photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  /* === Ripped Texts === */
  .ripped-text {
    position: relative;
    display: inline-block;
    padding: 0.4rem;
    height: max-content;
  }

  .ripped-text h1 {
    position: relative;
    display: inline;
    color: white;
    padding-inline: 1rem;
    font-size: 2rem;
    font-weight: 600;
    color: #000;
    line-height: 3rem;
  }
  .one {
    rotate: 10deg;
    background-color: #e2d1bf;
    -webkit-clip-path: polygon(0 0, 17% 8%, 34% 0, 54% 8%, 100% 0, 94% 9%, 98% 46%, 100% 100%, 53% 100%, 35% 87%, 0 100%, 9% 82%);
    clip-path: polygon(0 0, 17% 8%, 34% 0, 54% 8%, 100% 0, 94% 9%, 98% 46%, 100% 100%, 53% 100%, 35% 87%, 0 100%, 9% 82%);
  }
  .two {
    rotate: -10deg;
    background-color: #d1ef53;
    -webkit-clip-path: polygon(50% 0%, 70% 0, 99% 8%, 97% 70%, 99% 100%, 49% 100%, 0 100%, 6% 78%, 0 0, 27% 5%);
    clip-path: polygon(50% 0%, 70% 0, 99% 8%, 97% 70%, 99% 100%, 49% 100%, 0 100%, 6% 78%, 0 0, 27% 5%);
  }
  .three {
    rotate: 10deg;
    background-color: #fd5e0a;
    -webkit-clip-path: polygon(70% 9%, 95% 5%, 98% 35%, 100% 64%, 100% 91%, 55% 96%, 0 100%, 20% 65%, 0 6%, 38% 18%);
    clip-path: polygon(70% 9%, 95% 5%, 98% 35%, 100% 64%, 100% 91%, 55% 96%, 0 100%, 20% 65%, 0 6%, 38% 18%);
  }
  /* === Right Bottom (content) === */
  .right_bottom {
    height: 40%;
    width: 100%;
    display: flex;
    background-color: #f1eee9;
  }

  /* left part menu lists */
  .menu_container {
    display: grid;
    place-items: center;
    flex: 1;
    position: relative;
    background-color: #f1eee9;
  }
  /* little curve shape in middle */
  .left_curve {
    left: 0%;
    border-right: 1px solid #000;
    border-top-right-radius: 50px;
  }
  .right_curve {
    left: 50%;
    border-left: 1px solid #000;
    border-top-left-radius: 50px;
  }
  .triangle {
    z-index: 10;
    width: 50%;
    height: 20px;
    position: absolute;
    top: 0;
    border-top: 1px solid #000;
  }
  /* menu lists */
  .lists_container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #f1eee9;
  }
  .lists_container li {
    padding: 0.2rem;
    width: 200px;
    font-size: 18px;
    border-radius: 50px;
    background-color: transparent;
    text-align: center;
    border: 1px solid #121212;
    color: #000;
    cursor: pointer;
  }

  .lists_container li:hover {
    text-align: center;
    border-color: #f58f48;
    color: #f58f48;
  }
  /* More than receipe */
  .receipe_container {
    flex: 1;
    display: grid;
    place-items: center;
    border-top: 1px solid #121212;
    background-color: #f1eee9;
    padding: 1rem;
  }
  .receipe_container h1 {
    font-size: 1.6rem;
    text-align: center;
  }
  .asterisk {
    width: 24px;
    height: 24px;
  }
  .context {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    width: 100%;
    gap: 10px;
    .right_top {
      height: 100%;
      width: 100%;
    }
    .item_container {
      padding: 1rem 2rem;
      justify-content: center;
      position: relative;
      left: 0px;
      width: 100%;
    }
    .connector_line {
      height: 1px;
    }
    .right_bottom {
    }
    .menu_container {
      display: grid;
      place-items: center;
      flex: 1;
      position: relative;
      background-color: #f1eee9;
      padding: 1rem 0rem;
    }
    .triangle {
      height: 10px;
    }
  }
  @media (max-width: 600px) {
    .ripped-text h1 {
      padding-inline: 0.5rem;
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .right_bottom {
      flex-direction: column;
    }
  }
`;
export default Home;
