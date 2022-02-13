import styled from "styled-components";
import { colors } from "styles/colors";

export const LoaderComp = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  font-size: 30px;
`;
