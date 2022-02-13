import styled from "styled-components";
import { colors } from "styles/colors";

interface UpperProps {
  show: boolean;
}

export const ProductItemComp = styled.div<UpperProps>`
  width: 250px;
  height: 320px;
  background-color: #fff;
  border-radius: 10px;
  border-top: 1px solid ${colors.primary};
  border-left: 1px solid ${colors.primary};
  border-right: 1px solid ${colors.primary};
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  position: relative;
  margin: 10px 0;

  & > .back {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & > .back > div.image {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
  & > .back > div.info {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    & > h3 {
      width: 90%;
      height: 40%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      font-weight: bold;
    }
    & > h4 {
      width: 100%;
      height: 20%;
      display: flex;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      font-weight: bolder;
      color: ${colors.primary};
      font-size: 18px;
    }

    & > button {
      width: 100%;
      height: 33%;
      cursor: pointer;
      margin-top: 5px;
      background-color: ${colors.primary};
      border: none;
      outline: none;
      color: ${colors.secondary};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      transition: all 0.3s ease;
      border-top: 1px solid transparent;

      &:hover {
        cursor: pointer;
        background-color: ${colors.quaternary};
        color: ${colors.primary};
        border-top: 1px solid ${colors.primary};
      }
    }
  }

  & > .upper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 46, 97, 0.5);
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    transition: all 0.3s ease;
    opacity: ${(props) => (props.show ? "1" : "0")};

    & > .buttons {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > .buttons > button {
      width: auto;
      height: auto;
      color: ${colors.quaternary};
      background-color: transparent;
      border: none;
      font-size: 45px;
      margin: 0 10px;
      font-weight: bolder;
    }
    & > .buttons > h3 {
      font-size: 30px;
      color: ${colors.quaternary};
      margin: 0 10px;
      font-weight: bolder;
    }

    & > .add,
    & > .cancel {
      cursor: pointer;
    }

    & > .add {
      width: 80%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border: none;
      background-color: ${colors.quaternary};
      border-radius: 5px;
      font-family: "Poppins", sans-serif;
      font-weight: bold;
      margin-top: 5px;
      color: ${colors.primary};
    }
    & > .cancel {
      width: 80%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border: none;
      background-color: red;
      border-radius: 5px;
      font-family: "Poppins", sans-serif;
      font-weight: bold;
      margin-top: 5px;
      color: ${colors.quaternary};
    }

    .desactive {
      pointer-events: none;
      opacity: 0.7;
    }
  }

  @media (min-width: 640px) {
    margin: 0;
  }
`;
