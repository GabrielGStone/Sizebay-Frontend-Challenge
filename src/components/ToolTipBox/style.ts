import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  @media (max-width: 1000px) {
    width: 87vw;
  }
`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 86px;
  height: 50px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #848484;
  color: white;
  border-radius: 6px;
  top: 75%;
  z-index: 2;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: -20%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #848484 transparent;
  }

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
