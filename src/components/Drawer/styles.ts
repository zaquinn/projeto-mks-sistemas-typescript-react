import styled from "styled-components";

interface IPropsContainer {
  drawer: boolean;
}

export const Container = styled.div<IPropsContainer>`
  background-color: var(--blue);
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 485px;
  right: ${(props) => (props.drawer ? "0" : "-100%")};
  animation: 0.6s showingDrawer;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 16;

  @keyframes showingDrawer {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 485px;
    }
  }

  @keyframes showingDrawerMobile {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 310px;
    }
  }

  @media (max-width: 480px) {
    width: 310px;
    animation: 0.6s showingDrawerMobile;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px 15px 20px 30px;

  @media (min-width: 768px) {
    padding: 35px 22px 0px 40px;
  }

  > div {
    display: flex;
    justify-content: space-between;

    > h2 {
      font-size: 27px;
      font-weight: 700;
      line-height: 33px;
      width: 180px;

      @media (min-width: 768px) {
        width: max-content;
      }
    }
    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      background-color: var(--black);
      color: var(--blue);
      height: 45px;
      width: 45px;
      border-radius: 300px;

      @media (min-width: 768px) {
        color: var(--white);
        height: 38px;
        width: 38px;
        font-size: 20px;
      }
    }
  }
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 400px;

  @media (min-width: 768px) {
    min-height: 600px;
  }
`;

export const GridOverflowProducts = styled.div`
  overflow: auto;
  overflow-x: hidden;
  min-height: 300px;
  max-height: 400px;
  width: max-content;
  display: grid;
  grid-template-columns: auto;
  row-gap: 12px;
  padding: 15px 15px 0px 15px;

  @media (min-width: 768px) {
    max-height: 600px;
    height: max-content;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--gray-3);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--gray-4);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray-5);
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 22px;
  height: 35px;

  > h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
  }
  > span {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
  }

  @media (min-width: 768px) {
    padding: 35px 22px 0px 47px;
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 65px;
  background-color: var(--black);
  font-weight: 700;
  font-size: 20px;
  line-height: 15px;
  color: var(--white);
`;

export const MessageForEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;

  h4 {
    color: var(--white);
  }

  > svg {
    margin-top: 30px;
    font-size: 35px;
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
