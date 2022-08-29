import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray-2);
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 218px;
  padding-top: 20px;
  color: var(--gray-4);
  font-size: 25px;

  > svg {
    animation: 1s linear 0s infinite normal spinningIcon;
    @keyframes spinningIcon {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
