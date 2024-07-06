import styled from "styled-components";
import "./styles/index.css";
import omelet from "./assets/images/image-omelette.jpeg";
function App() {
  return (
    <Container>
      <img className="imgG" src={omelet} alt="omelet" />

      <Card>
        <div className="parrafo1">
          <img className="imgP" src={omelet} alt="omelet" />
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>

        <div className="parrafo2">
          <h2>Preparation time</h2>
          <ul>
            <li>
              <b>Total: </b> Approximately 10 minutes
            </li>
            <li>
              <b>Preparation:</b> 5 minutes
            </li>
            <li>
              <b>Cooking:</b> 5 minutes
            </li>
          </ul>
        </div>

        <div className="parrafo3">
          <h2> Ingredients</h2>

          <ul>
            <li>2-3 large eggs </li>
            <li> Salt, to taste </li>
            <li> Pepper, to taste </li>
            <li> 1 tablespoon of butter or oil </li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <Divider />

        <div className="parrafo4">
          <h2>Instructions</h2>

          <ol>
            <li>
              <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>

            <li>
              <b>Heat the pan:</b> Place a non-stick frying pan over medium heat
              and add butter or oil.
            </li>

            <li>
              <b>Cook the omelette:</b> Once the butter is melted and bubbling,
              pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
              surface.
            </li>

            <li>
              <b>Add fillings (optional):</b> When the eggs begin to set at the
              edges but are still slightly runny in the middle, sprinkle your
              chosen fillings over one half of the omelette.
            </li>

            <li>
              <b>Fold and serve:</b> As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>

            <li>
              <b> Enjoy:</b> Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </div>

        <Divider />

        <div className="parrafo5">
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <div className="table">
            <div className="section">
              <span>Calories</span> <b>277kcal</b>
            </div>
            <Divider />
            <div className="section">
              <span>Carbs</span> <b>0g</b>
            </div>
            <Divider />
            <div className="section">
              <span>Protein</span> <b>20g</b>
            </div>
            <Divider />
            <div className="section">
              <span>Fat</span> <b>22g</b>
            </div>
          </div>
        </div>
      </Card>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a target="_blank" href="https://jesus-calles.vercel.app/">
          Jesus Calles
        </a>
        .
      </div>
    </Container>
  );
}

export default App;

//#region stilos

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 5%;
  font-family: "Outfit", sans-serif;

  .attribution {
    padding: 20px;
    font-size: 11px;
    text-align: center;
    a {
      color: hsl(228, 45%, 44%);
    }
  }

  .imgG {
    display: none;
  }

  @media (max-width: 980px) {
    margin: 0;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    .imgG {
      margin: 0;
      display: block;
      width: 100%;
    }
  }
`;

const Card = styled.div`
  max-width: 1440px;
  width: 50%;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  padding: 1rem;
  color: var(--wengebrown);
  @media (max-width: 980px) {
    width: 100%;
    border-radius: 0;
    padding: 0;
  }

  h2 {
    font-weight: 600;
    font-family: "Young Serif", serif;
    color: var(--Nutmeg);
    font-size: 30px;
  }

  .parrafo1 {
    padding: 1rem;
    img {
      border-radius: 20px;
      max-width: 100%;
      display: block;
    }
    h1 {
      font-weight: 600;
      font-family: "Young Serif", serif;
    }
    p {
      font-weight: 400;
      font-size: 16px;
    }

    @media (max-width: 980px) {
      .imgP {
        display: none;
      }
    }
  }

  .parrafo2 {
    color: var(--wengebrown);
    background-color: var(--rosewhite);
    width: 90%;
    h2 {
      font-size: 1.5rem;
      color: var(--DarkRaspberry);
      padding-left: 2rem;
    }
    ul {
      padding-left: 3rem;
      li {
        line-height: 2rem;
      }
    }
  }

  .parrafo3 {
    color: var(--wengebrown);
    width: 90%;

    ul {
      li {
        line-height: 2rem;
      }
    }
  }

  .parrafo4 {
    color: var(--wengebrown);
    width: 90%;
    ol {
      li {
        margin-top: 1rem;
      }
    }
  }

  .parrafo5 {
    color: var(--wengebrown);
    width: 90%;
    padding-bottom: 3%;

    p {
      padding-bottom: 3%;
    }

    .table {
      display: flex;
      flex-direction: column;
      .section {
        padding-left: 4rem;
        display: flex;
        justify-content: space-between;
        width: 50%;
      }
    }
  }
`;

const Divider = styled.div`
  margin: 1rem;
  width: 90%;
  background-color: var(--lightgrey);
  height: 1px;
`;

//#endregion
