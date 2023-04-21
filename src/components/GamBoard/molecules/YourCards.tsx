import styled from "styled-components";
import { BetButton } from "./atoms/BetButton";
import { Cards } from "./atoms/Cards";
import { DealButton } from "./atoms/DealButton";

export const YourCards = () => {
  return (
    <DivStyled>
      <Cards
        cards={[
          { face: "hearts", value: "A" },
          { face: "hearts", value: "A" },
          { face: "hearts", value: "A" },
        ]}
      />
      <DivLeftSectionStyled>
        <BetButtonDivStyled>
          <BetButton title="1" />
          <BetButton title="2" />
          <BetButton title="3" />
        </BetButtonDivStyled>
        <DealButton />
      </DivLeftSectionStyled>
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const BetButtonDivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
`;

const DivLeftSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
