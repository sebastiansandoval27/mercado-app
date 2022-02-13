import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridMain, Layout, Loader, ProductItem } from "components";
import { RootState } from "store";
import { fetchProducts } from "store/reducers/productsSlice";
import { ProductModel } from "store/models/ProductModel";
import { Main } from "./AppStyled";

function App() {
  const { status, products } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <Layout>
      <Main>
        <GridMain products={products} />
      </Main>
    </Layout>
  );
}

export default App;
