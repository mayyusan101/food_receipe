import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import LoadingReceipes from "./LoadingReceipes";

const SearchedRecepies = () => {
  const { name } = useParams();

  const getReceipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}`);
    const data = await response.json();
    console.log(data, "data");
    return data;
  };

  const { isLoading, data } = useQuery(["search", name], getReceipes);

  if (isLoading) return <LoadingReceipes />;
  return (
    <Wrapper>
      <h2>
        You search for: <span className="search_category">{name}</span>
      </h2>
      <div className="cards_wrapper">
        {data.results.length > 0 ? (
          data.results.map((item) => (
            <Card key={item.id}>
              <Link to={`/receipe/${item.id}`}>
                <div className="receipe_img">
                  <img src={item.image} alt="" />
                </div>
                <div className="context">
                  <p>{item.title}</p>
                </div>
              </Link>
            </Card>
          ))
        ) : (
          <h1 className="no_result"> We have nothing you search for</h1>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 5rem;
  background-color: #f1eee9;
  .search_category {
    color: #f58f48;
  }
  .cards_wrapper {
    margin: 1rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 15px;
  }
  .no_result {
    text-align: center;
  }
  @media (max-width: 486px) {
    padding: 1rem 2rem;
  }
`;
const Card = styled.div`
  padding: 1rem;
  padding-bottom: 2rem;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;

  .receipe_img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    display: inline-block;
    max-width: 350px;
  }
  .context {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .context p {
    font-size: 18px;
    color: #050c14;
  }
`;

export default SearchedRecepies;
