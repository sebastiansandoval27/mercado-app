import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridMain, Layout, Loader } from "components";
import { RootState } from "store";
import { fetchProducts } from "store/reducers/productsSlice";
import { Main } from "./AppStyled";

function App() {
  const { status, products } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
