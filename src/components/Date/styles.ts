import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 24px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Day = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 60px;
`;
export const Month = styled.div`
  font-weight: 400;
  font-size: 24px;
`;
export const Year = styled.div`
  align-self: flex-end;
  font-weight: 300;
  font-size: 24px;
`;
export const Weekday = styled.div`
  align-self: flex-end;
  font-size: 24px;
  font-weight: 400;
`;
