import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 24px;
  background-color: #e4e4e4;
  border-radius: 4px;
  margin-bottom: 24px;
`;
interface barProps {
  progress: number;
}

export const GrennBar = styled.div<barProps>`
  border-radius: ${({ progress }) =>
    progress === 100 ? "4px" : "4px 0 0 4px"};
  height: 24px;
  width: ${({ progress }) => (progress ? `${progress}%` : "0px")};
  background-color: #5de290;
`;
