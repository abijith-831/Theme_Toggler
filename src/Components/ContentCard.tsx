

import { useEffect, useState } from 'react'
import '../../public/styles/ViewToggle.css'

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
  const [viewType, setViewType] = useState<'card' | 'list' | 'table'>('card');


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
    <div className='px-24 py-14 justify-center items-center'>
      <div className="view-toggle-wrapper">
        <div className="view-toggle-container">
          <button  className={`view-toggle-button ${viewType === 'card' ? 'active' : ''}`}  onClick={() => setViewType('card')}>  Card View</button>
          <button  className={`view-toggle-button ${viewType === 'list' ? 'active' : ''}`}  onClick={() => setViewType('list')}>  List View</button>
          <button  className={`view-toggle-button ${viewType === 'table' ? 'active' : ''}`}  onClick={() => setViewType('table')}>  Table View</button>
        </div>
      </div>


      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="w-12 text-black flex justify-center text-center"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="7.33" height="7.33"><animate id="spinner_oJFS" begin="0;spinner_5T1J.end+0.2s" attributeName="x" dur="0.6s" values="1;4;1"></animate><animate begin="0;spinner_5T1J.end+0.2s" attributeName="y" dur="0.6s" values="1;4;1"></animate><animate begin="0;spinner_5T1J.end+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="0;spinner_5T1J.end+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="8.33" y="1" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.1s" attributeName="x" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="y" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="1" y="8.33" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.1s" attributeName="x" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="y" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="15.66" y="1" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="8.33" y="8.33" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="1" y="15.66" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="15.66" y="8.33" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.3s" attributeName="x" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="y" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="8.33" y="15.66" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.3s" attributeName="x" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="y" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="15.66" y="15.66" width="7.33" height="7.33"><animate id="spinner_5T1J" begin="spinner_oJFS.begin+0.4s" attributeName="x" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.4s" attributeName="y" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.4s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.4s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect></svg></div>
        </div>

      ) : (
        <>
        
          <div className="grid  mt-12 grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-16">
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
            <button onClick={goToPreviousPage} disabled={currentPage === 1} className="px-6  py-2 bg-gray-200 rounded-full disabled:opacity-50 hover:transition-transform hover:scale-105 duration-300" >   Prev </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i + 1}   onClick={() => handlePageClick(i + 1)}   className={`px-4 py-2 rounded-full ${currentPage === i + 1 ? 'bg-blue-800 font-bold scale-120 text-white' : 'bg-gray-100 hover:transition-transform hover:scale-110 duration-300'}`} >  {i + 1}</button>
            ))}

            <button onClick={goToNextPage} disabled={currentPage === totalPages} className="px-6 py-2 bg-gray-200 rounded-full disabled:opacity-50 hover:transition-transform hover:scale-105 duration-300" >   Next </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ContentCard;
