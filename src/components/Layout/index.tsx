import { LayoutChildren, LayoutComp } from "./LayoutStyled";
import { useSelector } from "react-redux";
import { Cart, Header } from "components";
import { RootState } from "store";
import { useState } from "react";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (props): JSX.Element => {
  const [showCart, setShowCart] = useState(false);

  const { products, total } = useSelector((state: RootState) => state.cart);

  return (
    <LayoutComp>
      <Cart show={showCart} setShow={(value: boolean) => setShowCart(value)} />
      <Header
        onClickFunc={(value: boolean) => setShowCart(value)}
        amount={products.length}
        total={total}
      />
      <LayoutChildren>{props.children}</LayoutChildren>
    </LayoutComp>
  );
};
