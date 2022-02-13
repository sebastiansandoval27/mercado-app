import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Loader } from "components";
import { RootState } from "./store";
import { fetchProducts } from "./store/reducers/productsSlice";

function App() {
  const { status } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="App">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi neque
        iusto in veniam tenetur modi vitae laborum, et nulla consectetur aut
        asperiores incidunt totam doloremque labore assumenda hic quibusdam qui.
      </div>
    </Layout>
  );
}

export default App;
