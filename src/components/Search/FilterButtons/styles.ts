import styled from "styled-components";

interface ButtonProps {
  isactived?: boolean;
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  border-radius: 20px;
  padding: 8px 16px;
  border: 1px solid ${(isactived) => (isactived ? " #4da6b3" : "red")};
  background-color: #fff;
  margin-right: 8px;
  color: ${(isactived) => (isactived ? "#4da6b3" : "#dbdbdb")};
  &:hover {
    border-color: #7dd6e3;
    color: #7dd6e3;
  }
`;
