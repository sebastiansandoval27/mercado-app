import { Cart, HeaderComp } from "./HeaderStyled";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface HeaderProps {
  amount: number;
  total: number;
}

export const Header: React.FC<HeaderProps> = ({
  amount,
  total,
}: HeaderProps): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <HeaderComp>
      <div>
        <h2>Mercado</h2>
        <Cart amount={amount | 0}>
          <span className="icon">
            <AiOutlineShoppingCart />
          </span>
          <h4>
            <span>Total: </span> ${total | 0}
          </h4>
        </Cart>
      </div>
    </HeaderComp>
  );
};
