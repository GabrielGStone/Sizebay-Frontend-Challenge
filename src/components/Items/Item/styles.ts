import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #848484;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const Text = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  border: none;
  outline: none;
  padding: 10px 0 10px 16px;
`;

export const Buttons = styled.div`
  display: flex;
  height: 100%;
  color: rgba(0, 0, 0, 0);
`;

export const DeleteTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 100%;
  background-color: #e34f4f;
  &:hover {
    cursor: pointer;
  }
`;

export const CompleteTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  background-color: #5de290;
  border: 1px solid #5de290;
  border-radius: 0 4px 4px 0;
  &:hover {
    cursor: pointer;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  width: 20px;
  font-weight: 900;
  height: 20px;
  font-size: 12px;
  color: #5de290;
`;

export const Circle2 = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  color: #e34f4f;
  font-size: 20px;
  width: 20px;
  height: 20px;
`;