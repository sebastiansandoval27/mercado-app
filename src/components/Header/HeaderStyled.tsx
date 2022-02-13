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
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & h2 {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: black;
    color: ${colors.secondary};
    width: auto;
  }
  & span {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.secondary};
    font-size: 35px;
    font-weight: extra-bold;
    cursor: pointer;
  }
`;

export const Cart = styled.div<CartProps>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  font-size: 18px;
  font-weight: normal;

  & > span.icon::after {
    content: ${({ amount }) => `"${amount}"`};
    font-size: 15px;
    width: 30px;
    height: 30px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      font-size: 16px;
      font-weight: lighter;
      margin-right: 10px;
    }
    margin-left: 10px;
  }
`;
