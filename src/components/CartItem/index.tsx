import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { CartItemComp } from "./CartItemStyled";
import { CartModel } from "store/models/CartModel";

interface CartItemProps {
  product: CartModel;
  onClickFunc: () => void;
  plusQuantity: () => void;
  minusQuantity: () => void;
  remove: () => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  product,
  onClickFunc,
  plusQuantity,
  minusQuantity,
  remove,
}: CartItemProps): JSX.Element => {
  return (
    <CartItemComp>
      <div className="content">
        <span>{product.quantity}</span>
        <p>{product.product.attributes?.name}</p>
      </div>
      <AiOutlineMinusCircle
        className="minus"
        onClick={() => {
          minusQuantity();
        }}
      />
      <AiOutlinePlusCircle
        className="plus"
        onClick={() => {
          plusQuantity();
        }}
      />
      <AiOutlineCloseCircle
        className="close"
        onClick={() => {
          remove();
        }}
      />
    </CartItemComp>
  );
};
