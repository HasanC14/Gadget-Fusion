import React from "react";
import { useProducts } from "../Context/ProductProvider";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import Error from "../components/Error";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let content;
  if (loading) {
    content = <Loading />;
  }
  if (!loading) {
    content = products
      .filter((product) => product.rating >= 4)
      .map((product) => (
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

export default TopRated;
