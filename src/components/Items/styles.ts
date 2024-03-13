import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 216px;
  padding-right: 4px;
  overflow-y: auto;
  flex-direction: column;
  width: 102%;
  word-wrap: break-word;
`;

export const Text = styled.div`
  display: flex;
  color: #848484;
  gap: 5px;
  @media (max-width: 1000px) {
    white-space: nowrap;
    overflow-x: hidden;
    padding-right: 100px;
  }
`;

export const TextUnderLine = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

export const Wrap = styled.div`
  width: "680px";
`;
