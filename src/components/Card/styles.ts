import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 285px;
  width: 218px;
  padding-top: 20px;

  > img {
    align-self: center;
    justify-self: center;
  }

  > div {
    display: flex;
    justify-content: space-between;
    padding: 12px 14px 10px 14px;
    > h2 {
      color: var(--gray-5);
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
    }
    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      width: 74px;
      height: 30px;
      background-color: var(--gray-4);
      color: var(--white);
      font-size: 15px;
      font-weight: 700;
      line-height: 15px;
    }
  }

  > p {
    padding: 0px 14px 0px 14px;
    color: var(--gray-5);
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 32px;
    background-color: var(--blue);
    color: var(--white);
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    border-radius: 0px 0px 8px 8px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      padding-right: 10px;
    }
  }
`;
