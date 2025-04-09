import { useEffect, useState } from "react";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://dummyjson.com/products?limit=10&skip=10"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
      //   setCount(data.length);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <section class="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Products
          </h2>
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Duplicate the product card for more products */}
            {products.products?.map((product) => (
              <div class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-2xl">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <h3 class="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p class="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <p class="text-indigo-600 font-bold mt-3">${product.price}</p>
                </div>
                <div className="p-4">
                  {/* create tags */}
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="py-2 px-3 bg-green-500 rounded-md text-white flex item-center justify-center mt-8 cursor-pointer">
            Load more products
          </div>
        </div>
      </section>
    </>
  );
}
