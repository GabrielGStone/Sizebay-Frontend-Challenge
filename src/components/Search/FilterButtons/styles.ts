import styled from "styled-components";

interface ButtonProps {
  buttonselected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  border-radius: 20px;
  padding: 8px 16px;
  border: 1px solid
    ${({ buttonselected }) => (buttonselected ? "#4da6b3" : "#dbdbdb")};
  background-color: #fff;
  margin-right: 8px;
  color: ${({ buttonselected }) => (buttonselected ? "#4da6b3" : "#848484")};

  @media (max-width: 1000px) {
    margin: 0 0 0 8px;
  }

  &:hover {
    border-color: #7dd6e3;
    color: #7dd6e3;
  }
`;
