import { ProductItemComp } from "./ProductItemStyled";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { ProductModel } from "store/models/ProductModel";
import { useState } from "react";

interface ProductItemProps {
  product: ProductModel;
  onClickFunc: (quantity: number) => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onClickFunc,
}: ProductItemProps): JSX.Element => {
  const [showUpper, setShowUpper] = useState(false);
  const [amount, setAmount] = useState(0);

  return (
    <ProductItemComp show={showUpper}>
      <div className="upper">
        <div className="buttons">
          <button
            onClick={() => {
              if (amount > 0) {
                setAmount(amount - 1);
              }
            }}
          >
            <AiOutlineMinusCircle />
          </button>
          <h3>{amount}</h3>
          <button onClick={() => setAmount(amount + 1)}>
            <AiOutlinePlusCircle />
          </button>
        </div>
        <button
          className={`add ${amount < 1 && "desactive"}`}
          onClick={() => {
            onClickFunc(amount);
            setAmount(0);
            setShowUpper(false);
          }}
        >
          Agregar
        </button>
        <button
          className={`cancel`}
          onClick={() => {
            setShowUpper(false);
            setAmount(0);
          }}
        >
          Cancelar
        </button>
      </div>
      <div className="back">
        <div className="image">
          <img
            src={product.attributes?.image_app_url || "/images/not-found.jpg"}
            alt={`Product-${product.attributes?.name}`}
          />
        </div>
        <div className="info">
          <h3>{product.attributes?.name}</h3>
          <h4>${product.attributes?.price}</h4>
          <button onClick={() => setShowUpper(!showUpper)}>Agregar</button>
        </div>
      </div>
    </ProductItemComp>
  );
};
