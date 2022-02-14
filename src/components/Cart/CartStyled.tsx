import styled from "styled-components";
import { colors } from "styles/colors";

interface CartProps {
  show: boolean;
}

export const CartStyled = styled.div<CartProps>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: ${(props) => (props.show ? "0" : "-200%")};
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 50px;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

export const CartStyledContent = styled.div`
  width: 80%;
  height: 80%;
  background-color: ${colors.quaternary};
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > .header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 30px;
    color: ${colors.primary};
  }

  & > .grid-elements {
    width: 100%;
    height: 80%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
  }

  & > .not-products {
    width: 100%;
    margin: 30px 0;
    font-size: 18px;
    font-family: "Popins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: ${colors.primary};
    margin: 15px 0;
  }

  @media (min-width: 768px) {
    width: 600px;
    height: auto;
    & > .header {
      font-size: 45px;
    }

    & > .not-products {
      font-size: 25px;
    }
    & > .title {
      font-size: 30px;
    }
  }
`;
