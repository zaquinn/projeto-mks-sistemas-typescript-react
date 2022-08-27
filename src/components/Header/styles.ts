import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: var(--white);
  padding: 0px 25px 0px 25px;
  background-color: var(--blue);
  height: 48px;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0px 65px 0px 65px;
    height: 101px;
  }

  > h1 {
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    line-height: 19px;

    @media (min-width: 768px) {
      font-size: 40px;
    }

    > span {
      font-size: 16px;
      font-weight: 300;

      @media (min-width: 768px) {
        font-size: 20px;
      }
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 52px;
    height: 26px;
    padding: 0px 12px 0px 12px;
    border-radius: 8px;
    background-color: var(--white);
    color: var(--black);
    border: none;
    font-size: 12px;

    @media (min-width: 768px) {
      width: 90px;
      height: 45px;
      font-size: 18px;
      padding: 0px 22px 0px 22px;
    }

    > div {
      padding-top: 2px;
    }
    > span {
      font-weight: 700;
      line-height: 14.63px;
    }
  }
`;
