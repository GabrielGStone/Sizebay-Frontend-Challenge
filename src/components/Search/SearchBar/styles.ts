import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 419px;
  border: none;
  outline: none;
  padding: 10px 0 10px 16px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding-right: 16px;
`;

export const Glass = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
