import React from "react";
import { LoaderComp } from "./LoaderStyled";

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}: LoaderProps): JSX.Element => {
  return (
    <LoaderComp>
      <h3>Cargando...</h3>
    </LoaderComp>
  );
};

export default Loader;
