import styled from "styled-components";
import { colors } from "styles/colors";

interface CartProps {
  isOpen?: boolean;
  amount?: number;
}

export const HeaderComp = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }

  & h2 {
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: ${colors.secondary};
    width: auto;
  }
  & span {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.secondary};
    font-size: 30px;
    font-weight: extra-bold;
    cursor: pointer;
  }
  @media (min-width: 640px) {
    & > div {
      width: 85%;
      padding: 0 5px;
    }

    & h2 {
      font-size: 30px;
    }
    & span {
      font-size: 35px;
    }
  }
`;

export const Cart = styled.div<CartProps>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: normal;

  & > span.icon::after {
    content: ${({ amount }) => `"${amount}"`};
    font-size: 12px;
    width: 15px;
    height: 15px;
    background-color: ${colors.quaternary};
    color: ${colors.primary};
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 5px;
  }

  & h4 {
    display: none;
    justify-content: center;
    align-items: center;
    & span {
      font-size: 14px;
      font-weight: lighter;
      margin-right: 10px;
    }
    margin-left: 5px;
  }

  @media (min-width: 640px) {
    font-size: 18px;

    & > span.icon::after {
      font-size: 15px;
      width: 30px;
      height: 30px;
      margin-left: 10px;
    }

    & h4 {
      display: flex;
      & span {
        font-size: 18px;
        font-weight: lighter;
        margin-right: 10px;
      }
      margin-left: 5px;
    }
  }
`;
