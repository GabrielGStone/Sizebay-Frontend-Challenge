import styled from "styled-components";

interface ButtonProps {
  isActived?: boolean;
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 8px 16px;
  border: 1px solid ${(isActived) => (isActived ? " #4da6b3" : "red")};
  background-color: #fff;
  margin-right: 8px;
  color: ${(isActived) => (isActived ? "#4da6b3" : "#dbdbdb")};
  &:hover {
    border-color: #7dd6e3;
    color: #7dd6e3;
  }
`;
