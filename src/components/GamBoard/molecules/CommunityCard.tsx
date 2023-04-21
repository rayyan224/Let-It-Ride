import styled from "styled-components";
import CardBack from "../../../assets/cardBack.png";
import { Cards } from "./atoms/Cards";
export const CommunityCards = () => {
  return (
    <DivCardsStyled>
      <div></div>
      <div>
        <Cards
          cards={[
            { face: "hearts", value: "A" },
            { face: "hearts", value: "A" },
          ]}
        />
      </div>
      <div></div>
    </DivCardsStyled>
  );
};

const DivCardsStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 280px 1fr;
  align-items: center;
  > div {
    display: flex;
    column-gap: 16px;
  }
`;
