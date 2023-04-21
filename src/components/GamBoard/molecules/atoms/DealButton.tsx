import React from "react";
import styled from "styled-components";

interface IProps {
  onClick: () => void;
}

export const DealButton: React.FC<IProps> = ({ onClick }) => {
  return (
    <DivDealButton onClick={onClick} role="button">
      Deal
    </DivDealButton>
  );
};

const DivDealButton = styled.div`
  background: #fff;
  padding: 21px;
  color: #00753b;
  border-radius: 15px;
  box-shadow: 6px 6px 0 0 #7ebfa1;
  font-size: 22px;
  white-space: normal;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
