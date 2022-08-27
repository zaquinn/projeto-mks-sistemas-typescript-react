import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  width: 250px;
  height: 220px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    color: var(--gray-5);
    @media (min-width: 768px) {
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px 0px 25px;
    width: 380px;
    height: 95px;
  }
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95px;

  @media (min-width: 768px) {
    height: 60px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 30px;
`;
