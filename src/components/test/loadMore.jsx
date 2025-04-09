import { useEffect, useState } from "react";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [showSingleProduct, setShowSingleProduct] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});

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

  const showProduct = (id) => () => {
    setSingleProduct(products.products.find((product) => product.id === id));
    console.log(singleProduct);
    setShowSingleProduct(true);
    console.log(id);
  };
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
              <div
                onClick={showProduct(product.id)}
                class="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-2xl cursor-pointer"
                key={product.id}
              >
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
      {showSingleProduct ? (
        <section class="bg-gray-600 flex py-10 px-4 sm:px-6 lg:px-12 top-0 left-0 right-0 z-10 fixed">
          <div className="px-3 py-2 font-bold rounded-md text-white" title="Close">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                onClick={() => setShowSingleProduct(false)}
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
          </div>

          <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 w-10/12 h-screen overflow-y-scroll bg-white p-8 rounded-lg">
            {/* <!-- Image Gallery --> */}
            <div>
              <img
                src={singleProduct.images[0]}
                alt="Annibale Colombo Bed"
                class="w-full rounded-xl shadow-md mb-4 object-cover"
              />
              <div class="flex space-x-4">
                <img
                  src={singleProduct.images[1]}
                  class="w-1/4 rounded-md border hover:ring-2 ring-indigo-400 cursor-pointer"
                />
                <img
                  src={singleProduct.images[2]}
                  class="w-1/4 rounded-md border hover:ring-2 ring-indigo-400 cursor-pointer"
                />
                <img
                  src={singleProduct.images[3]}
                  class="w-1/4 rounded-md border hover:ring-2 ring-indigo-400 cursor-pointer"
                />
              </div>
            </div>

            {/* <!-- Product Info --> */}
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-2">
                {singleProduct.title}
              </h2>
              <p class="text-sm text-gray-500 mb-1">
                Brand:{" "}
                <span class="text-gray-800 font-medium">{singleProduct.brand}</span>
              </p>
              <p class="text-sm text-gray-500 mb-4">
                Category:{" "}
                <span class="text-gray-800 font-medium capitalize">
                    {singleProduct.category}
                </span>
              </p>

              <div class="flex items-center space-x-4 mb-4">
                <p class="text-2xl font-semibold text-indigo-600">{singleProduct.price}</p>
                <p class="text-sm line-through text-gray-400">$2675.34</p>
                <span class="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-md">
                  {singleProduct.discountPercentage}% off
                </span>
              </div>

              <p class="text-gray-700 mb-6">
                {singleProduct.description}
              </p>

              <ul class="space-y-2 text-sm text-gray-600">
                <li>
                  <strong>Availability:</strong>{" "}
                  <span class="text-green-600 font-medium">In Stock</span> (47
                  available)
                </li>
                <li>
                  <strong>Minimum Order:</strong> {singleProduct.minimumOrderQuantity} unit
                </li>
                <li>
                  <strong>Dimensions:</strong> {singleProduct.dimensions.width}" W × {singleProduct.dimensions.height}" H × {singleProduct.dimensions.depth}" D
                </li>
                <li>
                  <strong>Weight:</strong> 3kg
                </li>
                <li>
                  <strong>Rating:</strong> ⭐ 4.14
                </li>
                <li>
                  <strong>Shipping:</strong> {singleProduct.shippingInformation}
                </li>
                <li>
                  <strong>Return Policy:</strong> {singleProduct.returnPolicy}
                </li>
                <li>
                  <strong>Warranty:</strong> 2 year warranty
                </li>
                <li>
                  <strong>SKU:</strong> {singleProduct.sku}
                </li>
                <li>
                  <strong>Barcode:</strong> {singleProduct.meta.barcode}
                </li>
                <li>
                  <strong>Product ID:</strong> <img src={singleProduct.meta.qrCode} alt="" className="size-32" />
                </li>
                <li>
                  <strong>Tags:</strong>
                  {singleProduct.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </li>
              </ul>

              <div class="mt-6">
                <button class="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
