import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillHeartbreakFill } from "react-icons/bs";

const DetailsReceipe = () => {
  const { receipeId } = useParams();
  const [activeTab, setActiveTab] = useState("instructions");
  const [details, setDetails] = useState({});
  // for save or unsave meal
  const initialState = localStorage.getItem("save") ? JSON.parse(localStorage.getItem("save")) : [];
  const [saveMeals, setSaveMeals] = useState(initialState);
  const [save, setSave] = useState(false);

  useEffect(() => {
    const hasMeal = saveMeals.find((item) => item.id === Number(receipeId));
    if (hasMeal) {
      setSave(true);
    } else {
      setSave(false);
    }
    getDetails();
  }, []);

  const getDetails = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${receipeId}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json();
    setDetails(data);
  };

  const unSaveMeal = () => {
    setSaveMeals((prev) => prev.filter((item) => item.id !== Number(receipeId)));
    const updateMeals = saveMeals.filter((item) => item.id !== details.id);
    localStorage.setItem("save", JSON.stringify(updateMeals));
    setSave(false);
  };
  const saveMeal = () => {
    setSaveMeals((prev) => [...prev, { id: details.id }]);
    const updateMeals = [...saveMeals, { id: details.id, title: details.title, healthScore: details.healthScore, dairyFree: details.dairyFree }];
    localStorage.setItem("save", JSON.stringify(updateMeals));
    setSave(true);
  };
  return (
    <Wrapper>
      {details.title && (
        <main className="details_wrapper">
          <Receipe>
            <Card>
              <h3 className="details_title">{details.title}</h3>
              <img src={details.image} alt={details.title} />
              {save ? (
                <div className="unsave_btn">
                  <p>You already save the meal</p>
                  <button onClick={unSaveMeal}>
                    <div className="heart_icon">
                      <BsFillHeartbreakFill />
                    </div>
                    unsave
                  </button>
                </div>
              ) : (
                <div className="save_btn">
                  <button onClick={saveMeal}>
                    <div className="heart_icon">
                      <AiFillHeart />
                    </div>
                    save
                  </button>
                </div>
              )}
            </Card>
            {activeTab === "instructions" && <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>}
          </Receipe>
          <Info>
            <div className="btn_wrapper">
              <Button onClick={() => setActiveTab("instructions")} className={activeTab === "instructions" ? "active" : ""}>
                Instructions
              </Button>
              <Button onClick={() => setActiveTab("ingredients")} className={activeTab === "ingredients" ? "active" : ""}>
                Ingredients
              </Button>
            </div>
            <div>{activeTab === "instructions" && <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>}</div>
            {activeTab === "ingredients" && (
              <ul>
                {details.extendedIngredients && details.extendedIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.original}</li>)}
              </ul>
            )}
          </Info>
        </main>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 2rem 0rem;
  background-color: #f1eee9;
  .details_wrapper {
    display: flex;
    justify-content: space-between;
  }
  .active {
    background-color: #ff4e00;
    background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
    color: #fff;
  }
  ul {
    margin-top: 2rem;
  }
  ol li {
    font-size: 1rem !important;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
  }
  li {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 1rem 0;
    font-size: 16px;
    line-height: 1.5rem;
    &:first-child {
      margin-top: 2rem;
    }
  }
  p ol li {
    font-size: 0.7rem;
    line-height: 1.5rem;
  }
  @media (max-width: 1024px) {
    padding: 3rem 1rem 1rem;
    .details_wrapper {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 486px) {
    padding: 1rem 1rem;
  }
`;
const Receipe = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .details_title {
    font-size: 2rem;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    padding: 1rem;
    color: #333;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: none;
  }
  @media (max-width: 768px) {
    .details_title {
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }
`;
const Info = styled.div`
  flex: 1;
  margin-left: 0rem;
  .btn_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 2rem;
  }
  @media (max-width: 1068px) {
    margin-top: 2rem;
    margin-left: 1rem;
  }
  @media (max-width: 468px) {
    margin-top: 1rem;
    .btn_wrapper {
      gap: 1rem;
    }
  }
`;
const Card = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border: 2px solid #121212;
    filter: blur(0.7);
  }
  .save_btn,
  .unsave_btn {
    margin-top: 1rem;
    place-self: end;
  }
  .unsave_btn {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .unsave_btn p {
    color: lightgreen;
    margin: 0;
    font-weight: 500;
  }
  .heart_icon {
    display: grid;
    place-items: center;
    font-size: 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #f58f48;
    color: #fff;
    border-radius: 2px;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    width: fit-content;
  }
  button:hover {
    background-color: #f47e37;
  }
  @media (max-width: 486px) {
    img {
      width: 100%;
    }
  }
`;

export default DetailsReceipe;
