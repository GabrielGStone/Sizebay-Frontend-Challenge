import styled from "styled-components";

interface boxProps {
  taskselected?: number;
}

export const Box = styled.div<boxProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const Input = styled.input<boxProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  padding: 10px 0 10px 16px;
  background-color: ${({ taskselected }) =>
    taskselected === 0 ? "" : "#F7F7F7"};
`;

export const Add = styled.div<boxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 100%;
  background-color: #4da6b3;
  opacity: ${({ taskselected }) => (taskselected === 0 ? "" : "0.5")};
  border: 1px solid #4da6b3;
  border-radius: 0 4px 4px 0;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #4da6b3;
  background-color: #fff;
  width: 20px;
  height: 20px;
`;
