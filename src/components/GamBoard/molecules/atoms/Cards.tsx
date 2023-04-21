import React from "react";
import CardBack from "../../../../assets/cardBack.png";
import styled from "styled-components";

interface ICard {
  face: string;
  value: string;
  isFacedDown?: boolean;
}

interface IProps {
  cards: ICard[];
}

export const Cards: React.FC<IProps> = ({ cards }) => {
  return (
    <DivStyled>
      {cards.map((card, index) => (
        <ImgStyled src={CardBack} key={index} />
      ))}
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  column-gap: 16px;
`;
const ImgStyled = styled.img`
  max-height: 185px;
`;
