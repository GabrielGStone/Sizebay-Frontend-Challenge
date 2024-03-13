import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 650px;
  background-color: #fff;
  border-radius: 4px;
  padding: 54px 60px;
  @media (max-width: 1000px) {
    width: 96%;
    height: 97.5%;
    padding: 48px 16px;
  }
`;
