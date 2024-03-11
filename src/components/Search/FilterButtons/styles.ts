import styled from "styled-components";

interface ButtonProps {
  selected: boolean;
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  border-radius: 20px;
  padding: 8px 16px;
  border: 1px solid ${(selected) => (selected ? " #4da6b3" : "#dbdbdb")};
  background-color: #fff;
  margin-right: 8px;
  color: ${(selected) => (selected ? "#4da6b3" : "#dbdbdb")};
  &:hover {
    border-color: #7dd6e3;
    color: #7dd6e3;
  }
`;
