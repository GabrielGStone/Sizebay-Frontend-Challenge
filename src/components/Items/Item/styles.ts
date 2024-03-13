import styled from "styled-components";

export const Box = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #848484;
  margin-bottom: 8px;
  @media (max-width: 1000px) {
    width: 100%;
    flex: none;
  }
`;

interface textProps {
  taskSelected: any;
  id: any;
}
export const Text = styled.input<textProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  border: none;
  outline: none;
  height: 100%;
  padding: 10px 0 10px 16px;
  background-color: ${({ taskSelected, id }) =>
    taskSelected === id ? "" : "#F4F4F4"};
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
    background-color: #d33f3f;
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
    background-color: #4dd280;
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
