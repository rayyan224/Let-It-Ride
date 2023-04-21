import styled from "styled-components";
import { CommunityCardTitle } from "./molecules/CommunitCardTitle";
import { CommunityCards } from "./molecules/CommunityCard";
import { YourCards } from "./molecules/YourCards";
import { YourCardTitle } from "./molecules/YourCardTitle";
import Logo from "../../assets/logo.png";
export const GameBoard = () => {
  return (
    <DivStyled>
      <CommunityCards />
      <CommunityCardTitle />
      <YourCardTitle />
      <YourCards />
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;
