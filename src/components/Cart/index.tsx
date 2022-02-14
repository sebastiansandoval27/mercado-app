import { CartStyled, CartStyledContent } from "./CartStyled";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CartItem } from "components";
import { RootState } from "store";
import { CartModel } from "store/models/CartModel";
import { editAmount, removeFromCart } from "store/reducers/cartSlice";

interface CartProps {
  show: boolean;
  setShow: any;
}

export const Cart: React.FC<CartProps> = ({ show, setShow }): JSX.Element => {
  const { products } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <CartStyled show={show}>
      <CartStyledContent>
        <div className="header">
          <AiOutlineCloseCircle
            onClick={() => {
              setShow(false);
            }}
          />
        </div>
        <div className="title">
          <h3>Tu carrito de Compras</h3>
        </div>
        {products && products.length > 0 ? (
          <div className="grid-elements">
            {products.map((product: CartModel) => (
              <CartItem
                key={product.product.id}
                onClickFunc={() => console.log("click")}
                product={product}
                plusQuantity={() => {
                  dispatch(
                    editAmount({
                      product: product.product,
                      quantity: product.quantity + 1,
                    })
                  );
                }}
                minusQuantity={() => {
                  dispatch(
                    editAmount({
                      product: product.product,
                      quantity: product.quantity - 1,
                    })
                  );
                }}
                remove={() => {
                  dispatch(
                    removeFromCart({
                      product: product.product,
                    })
                  );
                }}
              />
            ))}
          </div>
        ) : (
          <div className="not-products">No hay productos en el carrito</div>
        )}
      </CartStyledContent>
    </CartStyled>
  );
};
