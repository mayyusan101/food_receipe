import styled from "styled-components";
import Pupular from "../components/Pupular";
import Veggie from "../components/Veggie";

const Categories = () => {
  return (
    <Wrapper>
      <Pupular />
      <hr />
      <Veggie />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 1rem;
`;



export default Categories;
