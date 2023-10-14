import DetailOrderCard from "../../Cards/OrderDetailsCards/DetailOrderCard";

const ProductsDetails = ({ products }) => {
  console.log(products);

  return (
    <div className="w-full h-auto flex flex-col gap-6 pt-6 pb-24">
      {products?.map((product, index) => {
        return <DetailOrderCard key={index} product={product} />;
      })}
    </div>
  );
};
export default ProductsDetails;
