import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoResult = styled.h3`
  font-size: 24px;
  color: var(--gray-5);

  > span {
    color: var(--gray-3);
  }
`;
