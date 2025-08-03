

import React, { useEffect, useState } from 'react'

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
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
              <div className='hover:transition-transform hover:scale-101 duration-300'>
                <div className="p-8 relative rounded-4xl shadow-2xl bg-[var(--bg-card)] text-[var(--text-primary)] transition-all duration-700">
                  <div className="absolute top-4 left-4 rounded-full bg-white text-black text-[var(--text-primary)] px-6 py-3 shadow">
                    <h2 className="text-xs font-bold">{product.rating.rate}</h2>
                  </div>
                  <img src={product.image} alt={product.title} className="h-50 object-contain w-full mb-4" />
                </div>

                <div className="pt-6">
                  <h2 className="font-semibold text-lg">{product.title}</h2>
                  <p className="text-sm mb-2 text-[var(--text-secondary)]">{product.description.slice(0, 100)}...</p>
                  <p className="font-extrabold text-xl">${product.price}</p>
                </div>

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
