import { Cart, HeaderComp } from "./HeaderStyled";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface HeaderProps {
  amount: number;
  total: number;
  onClickFunc: any;
}

export const Header: React.FC<HeaderProps> = ({
  amount,
  total,
  onClickFunc,
}: HeaderProps): JSX.Element => {
  return (
    <HeaderComp>
      <div>
        <h2>Mercado</h2>
        <Cart amount={amount | 0}>
          <span className="icon">
            <AiOutlineShoppingCart
              className="cart"
              onClick={() => {
                onClickFunc(true);
                console.log("open");
              }}
            />
          </span>
          <h4>
            <span>Total: </span> ${total | 0}
          </h4>
        </Cart>
      </div>
    </HeaderComp>
  );
};
