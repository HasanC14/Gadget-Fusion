import React from "react";
import { useProducts } from "../Context/ProductProvider";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let content;
  if (loading) {
    content = <Loading />;
  }
  if (!loading) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product}></ProductCard>
    ));
  }
  if (error) {
    content = <Error />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Home;
