import styled from "styled-components";

const LoadingReceipes = () => {
  return (
    <Wrapper>
      <h2>
       Loading...
      </h2>
      <div className="cards_wrapper">
        <Card>
          <div className="receipe_img">
          </div>
          <div className="context">
            <p></p>
          </div>
        </Card>
        <Card>
          <div className="receipe_img">
          </div>
          <div className="context">
            <p></p>
          </div>
        </Card>
        <Card>
          <div className="receipe_img">
          </div>
          <div className="context">
            <p></p>
          </div>
        </Card>
        <Card>
          <div className="receipe_img">
          </div>
          <div className="context">
            <p></p>
          </div>
        </Card>
        <Card>
          <div className="receipe_img">
          </div>
          <div className="context">
            <p></p>
          </div>
        </Card>
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
    gap: 10px;
  }
  .cards_wrapper .card {
  }
`;
const Card = styled.div`
  padding: 1rem;
  padding-bottom: 2rem;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;

  .receipe_img {
    max-width: 250px;
    height: 100px;
    background-color: #A4A7AB;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .context {
    margin-top: 10px;
    max-width: 100px;
    height: 30px;
    background-color: #A4A7AB;
  }
`;

export default LoadingReceipes;
