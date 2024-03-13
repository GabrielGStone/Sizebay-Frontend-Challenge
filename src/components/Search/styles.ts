import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 11px;
    align-items: flex-end;
    margin-bottom: 16px;
  }
`;
