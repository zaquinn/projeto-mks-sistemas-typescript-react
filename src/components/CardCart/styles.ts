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
    font-weight: 400;
    padding-top: 20px;
    @media (min-width: 768px) {
      max-width: 100px;
      font-size: 13px;
      line-height: 17px;
      padding: 0;
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
  height: 105px;
  padding-top: 20px;

  @media (min-width: 768px) {
    height: 60px;
    padding: 0;
  }
`;

export const PriceQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 23px 0px 15px;
  width: 100%;
  @media (min-width: 768px) {
    height: 60px;
    width: max-content;
    padding: 0;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 35px;
  color: var(--black);

  @media (min-width: 768px) {
    height: 30px;
  }

  > p {
    display: none;
    font-weight: 400;
    font-size: 6px;
    line-height: 7px;
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 10px;
  width: 97px;
  height: 100%;
  border: 0.3px solid;
  border-color: var(--gray-3);
  border-radius: 4px;

  @media (min-width: 768px) {
    height: 20px;
    width: 50px;
    padding: 0px 5px 0px 5px;
  }

  > button {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    background-color: transparent;

    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 15px;
    }
  }

  > span {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    border-right: 0.2px solid;
    border-left: 0.2px solid;
    border-color: var(--gray-3);
    padding: 0px 15px 0px 15px;

    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 10px;
      padding: 0px 5px 0px 5px;
    }
  }
`;

export const PriceSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 700;
  font-size: 15px;
  line-height: 17px;
  background-color: var(--gray-4);
  border-radius: 5px;
  width: 84px;
  height: 35px;

  @media (min-width: 768px) {
    background-color: transparent;
    color: var(--black);
    font-size: 14px;
    width: max-content;
    height: max-content;
    transform: translate(30px, 0px);
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  height: 40px;
  font-size: 35px;
  color: var(--black);
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(102px, -188px);
  @media (min-width: 768px) {
    transform: translate(30px, -45px);
    background-color: var(--black);
    color: var(--white);
    font-size: 12px;
    width: 18px;
    height: 18px;
  }
`;
