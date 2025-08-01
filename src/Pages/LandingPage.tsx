import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const LandingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold">Welcome to the Themed App</h1>
      <p>This is a sample paragraph showing the currently selected theme.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Click Me</button>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded shadow bg-white dark:bg-gray-800">
              <img src={product.image} alt={product.title} className="h-40 object-contain w-full mb-4" />
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-sm mb-2">{product.description.slice(0, 100)}...</p>
              <p className="font-bold text-blue-600 dark:text-blue-400">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
