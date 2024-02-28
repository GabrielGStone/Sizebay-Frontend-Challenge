import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #848484;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  border: none;
  outline: none;
  padding: 10px 0 10px 16px;
`;

export const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 100%;
  background-color: #4da6b3;
  border: 1px solid #4da6b3;
  border-radius: 0 4px 4px 0;
  font-weight: 400;
  &:hover {
    cursor: pointer;
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
