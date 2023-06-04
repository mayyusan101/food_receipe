import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pupular = () => {
  const [popular, setPopular] = useState([]);
  const [perPage, setPerPage] = useState(4);
  const [gap, setGap] = useState(3);

  useEffect(() => {
    getPopular();
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setPerPage(2);
        setGap(1);
      } else if (window.innerWidth <= 768) {
        setPerPage(3);
        setGap(2);
      } else {
        setPerPage(4);
      }
    };
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`);
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <Wrapper>
      <div className="slider_section">
        <div className="slide_wrapper">
          <h2>Pupular Receipes</h2>
          {popular && (
            <Splide
              options={{
                perPage: `${perPage}`,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: `${gap}rem`,
              }}
            >
              {popular.map((item) => (
                <SplideSlide key={item.id}>
                  <Card>
                    <Link to={`/receipe/${item.id}`}>
                      <p>{item.title}</p>
                      <img src={item.image} alt="" />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              ))}
            </Splide>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  background-color: #f1eee9;
  .slider_section h2 {
    font-size: 1.6rem;
    padding-bottom: 1rem;
  }
  .slide_wrapper {
    margin: 0 10%;
  }
  @media (max-width: 1024px) {
    .slide_wrapper {
      margin: 0;
    }
  }
`;

const Card = styled.div`
  min-height: 15rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background-color: #f1eee9;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 2rem;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 20%);
    color: #fff;
    width: 100%;
    height: 40%;
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    min-height: 12rem;
  }
`;
const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  z-index: 3;
  border-radius: 2rem;
`;
export default Pupular;
