import ProductList from "./productList";

export default function ProductsPage() {
  return (
    <div className="flex flex-col md:flex-row m-0">
        <div className="content w-full p-5 flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                <ProductList/>
            </div>
        </div>
    </div>
  );
}