import { GridMainStyled } from "./GridMainStyled";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Header, ProductItem } from "components";
import { RootState } from "store";
import { ProductModel } from "store/models/ProductModel";
import { addToCart } from "store/reducers/cartSlice";

interface GridMainProps {
  products: ProductModel[];
}

export const GridMain: React.FC<GridMainProps> = (props): JSX.Element => {
  const { status, products } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();

  return (
    <GridMainStyled>
      {products &&
        products.map((product: ProductModel, index) => {
          return (
            <ProductItem
              onClickFunc={(quantity: number) => {
                dispatch(
                  addToCart({
                    product,
                    quantity,
                  })
                );
              }}
              key={`Product - ${index}`}
              product={product}
            />
          );
        })}
    </GridMainStyled>
  );
};
