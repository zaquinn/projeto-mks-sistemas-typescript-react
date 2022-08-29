import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h3 {
    padding: 10px 0px 0px 0px;
  }
`;

export const InfoResult = styled.h3`
  font-size: 24px;
  color: var(--gray-5);
  margin-left: 10px;

  @media (min-width: 768px) {
    margin: 0;
  }

  > span {
    color: var(--gray-3);
  }
`;

export const ContainerGrid = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  min-height: 600px;

  padding: 18px 0px 35px 0px;

  @media (min-width: 768px) {
    padding: 15px 0px 15px 0px;
  }
`;

export const Grid = styled.div`
  width: max-content;
  display: grid;
  padding: 0px 30px 0px 30px;
  grid-template-columns: auto;
  row-gap: 18px;

  @media (min-width: 768px) {
    max-width: 900px;
    padding: 0;
    row-gap: 30px;
    column-gap: 20px;
    grid-template-columns: auto auto auto;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
    padding: 0;
    row-gap: 30px;
    column-gap: 20px;
    grid-template-columns: auto auto auto auto;
  }
`;
