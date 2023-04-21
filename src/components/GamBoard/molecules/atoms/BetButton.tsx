import styled from "styled-components";

interface IProps {
  title: string;
  onChange: (value: string) => void;
  value: string;
}

export const BetButton: React.FC<IProps> = ({ title, onChange, value }) => {
  return (
    <DivStyled>
      <PTitleStyled>{title}</PTitleStyled>
      <DivInputStyled>
        <p>$</p>
        <InputStyled
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </DivInputStyled>
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  height: 150px;
  width: 150px;
  border-radius: 100px;
  background-color: #f8e678;
  flex-direction: column;
  justify-content: space-evenly;
`;

const PTitleStyled = styled.h1`
  font-size: 52px;
  opacity: 0.85;
  line-height: 18px;
  font-size: 52px;
  color: #b8860b;
  margin-right: auto;
  margin-left: auto;
`;

const InputStyled = styled.input`
  height: 28px;
  width: 80px;
  border-radius: 16px;
  font-weight: bolder;
  font-size: 18px;
`;

const DivInputStyled = styled.div`
  font-size: 24px;
  font-weight: bolder;
  column-gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
`;
