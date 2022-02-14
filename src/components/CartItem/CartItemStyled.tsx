import styled from "styled-components";
import { colors } from "styles/colors";

export const CartItemComp = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.primary};
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 14px;

  & > .content {
    width: 80%;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${colors.primary};
    font-size: 12px;
    & > span {
      margin-right: 10px;
      background-color: ${colors.primary};
      padding: 5px;
      color: ${colors.secondary};
      border-radius: 20px;
    }
  }
  & > svg.close {
    color: red;
    font-size: 25px;
  }
  & > svg.minus,
  & > svg.plus {
    color: ${colors.blue};
    cursor: pointer;
    font-size: 25px;
  }

  @media (min-width: 768px) {
    & > .content {
      font-size: 18px;
    }
  }
`;
