import { LayoutChildren, LayoutComp } from "./LayoutStyled";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Header } from "components";
import { RootState } from "store";

interface LayoutProps {
  /* isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void; */
}

export const Layout: React.FC<LayoutProps> = (
  props,
  {}: LayoutProps
): JSX.Element => {
  const { products, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <LayoutComp>
      <Header amount={products.length} total={total} />
      <LayoutChildren>{props.children}</LayoutChildren>
    </LayoutComp>
  );
};
