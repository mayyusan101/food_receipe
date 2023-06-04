import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SavedMeals = () => {
  const [savedMeals, setSavedMeals] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("save");
    if (check) {
      setSavedMeals(JSON.parse(check));
    }
  }, []);
  return (
    <Wrapper>
      {savedMeals.length > 0 ? (
        <div>
          <h1>My Saved Meal Lists</h1>
          <div className="save_wrapper">
            <div className="card_wrapper">
              {
                savedMeals.map(item => (
                <Card key={item.id}>
                <Link to={`/receipe/${item.id}`}>
                  <h3>{item.title}</h3>
                  <ul className="lists">
                    <li>
                    HealthScore: <span>{item.healthScore}</span>
                    </li>
                    <li>
                    DairyFree: <span>{item.dairyFree ? "yes" : "no"}</span>
                    </li>
                  </ul>
                </Link>
              </Card>
                ))
              }
              
            </div>
          </div>
        </div>
      ) : (
        <div className="no_save">
          <h1>You have no saved meals</h1>
          <p><Link to="/receipes">Go to explore</Link></p>
        </div>
      )} 
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 3rem;
  h1 {
    color: #f58f48;
  }
  .save_wrapper {
  }
  .card_wrapper {
    margin: 1rem auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .no_save {
    display: grid;
    place-items: center;
    margin-top: 1rem;
  }
  .no_save h1 {
    text-align: center;
  }
  .no_save a {
    text-decoration: underline;
  }
`;

const Card = styled.div`
  padding: 1rem;
  background-color: #f1eee9;
  min-width: 250px;
  border: 2px solid #4a4b4f;
  border-radius: 0px;
  cursor: pointer;
  max-width: 300px;
  &:hover {
    background-color: #fff;
  }
  h3 {
    color: #4a4b4f;
  }
  .lists {
    margin-top: 5px;
  }
  .lists li {
    display: flex;
    align-items: center;
    color: #f58f48;
  }
  .lists li span{
    margin-left: 5px;
  }
  .lists li::before {
    content: "•";
    font-size: 2rem;
    line-height: 1.5rem;
    color: #f58f48; /* Set the desired color */
  }

`;
export default SavedMeals;
