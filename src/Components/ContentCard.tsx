

import React, { useEffect, useState } from 'react'

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ContentCard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log('dataa',data);
        
        
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='px-24 py-14'>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-16">
            {currentProducts.map((product) => (
              <div key={product.id} className="p-8   rounded-4xl shadow-2xl bg-gray-100">
                <img src={product.image} alt={product.title} className="h-50 object-contain w-full mb-4" />
                <h2 className="font-semibold text-lg">{product.title}</h2>
                <p className="text-sm mb-2">{product.description.slice(0, 100)}...</p>
                <p className="font-bold text-blue-600 dark:text-blue-400">${product.price}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageClick(i + 1)}
                className={`px-3 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ContentCard;
