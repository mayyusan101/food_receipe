import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setInput("");
    navigate(`search/${input}`);
  };
  return (
    <Wrapper>
      <div className="search_wrapper">
        <h1>What is your cusine for today?</h1>
        <form action="#" onSubmit={submitHandler}>
          <input type="text" placeholder="Search your receipe here" value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="search_btn">
            <ImSearch size={20} />
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  .search_wrapper {
    padding: 1rem;
    margin: 0 auto;
    display: grid;
    place-items: center;
    gap: 10px;
    font-weight: 300;
    font-family: "Permanent Marker", cursive;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 50%;
  }
  input {
    width: 80%;
    height: 50px;
    border: none;
    outline: none;
    background-color: #fff;
    border: 2px solid #fbac19;
    font-size: 18px;
    padding: 1rem;
    border-radius: 25px;
  }
  .search_btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fbac19;
    color: white;
    display: grid;
    place-items: center;
  }
  @media (max-width: 768px) {
    form {
      display: flex;
      gap: 10px;
      width: 100%;
      align-items: center;
    }
    input {
      height: 40px;
      font-size: 16px;
      padding: 1rem;
      border-radius: 25px;
    }
    .search_btn {
      width: 40px;
      height: 40px;
    }
  }
`;

export default SearchBar;
