import { useEffect, useRef, useState } from 'react'
import '../../styles/ViewToggle.css'
import ListView from './ListView'
import CardView from './CardView'
import TableView from './TableView'
import { useTheme } from '../../ThemeContext'

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
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      setViewType('list');
    } else if (theme === 'blue') {
      setViewType('table');
    } else {
      setViewType('card');
    }
  }, [theme]);

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

  
  const topRef = useRef<HTMLDivElement | null>(null); 

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' }); 
    }
  };
  

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    scrollToTop();
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    scrollToTop();
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();

  };



  return (
    <div ref={topRef} className=' px-2 md:px-8 lg:px-16 py-14 justify-center items-center'>
      <div className="view-toggle-wrapper mt-2 ">
        <div className="view-toggle-container">
          <button  className={`view-toggle-button font-bold ${viewType === 'card' ? 'active' : ''}`}  onClick={() => setViewType('card')}>  Card View</button>
          <button  className={`view-toggle-button font-bold ${viewType === 'list' ? 'active' : ''}`}  onClick={() => setViewType('list')}>  List View</button>
          <button  className={`view-toggle-button font-bold ${viewType === 'table' ? 'active' : ''}`}  onClick={() => setViewType('table')}>  Table View</button>
        </div>
      </div>


      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="w-12 text-black flex justify-center text-center"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="7.33" height="7.33"><animate id="spinner_oJFS" begin="0;spinner_5T1J.end+0.2s" attributeName="x" dur="0.6s" values="1;4;1"></animate><animate begin="0;spinner_5T1J.end+0.2s" attributeName="y" dur="0.6s" values="1;4;1"></animate><animate begin="0;spinner_5T1J.end+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="0;spinner_5T1J.end+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="8.33" y="1" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.1s" attributeName="x" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="y" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="1" y="8.33" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.1s" attributeName="x" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="y" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="15.66" y="1" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="8.33" y="8.33" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="1" y="15.66" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="15.66" y="8.33" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.3s" attributeName="x" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="y" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="8.33" y="15.66" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.3s" attributeName="x" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="y" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="15.66" y="15.66" width="7.33" height="7.33"><animate id="spinner_5T1J" begin="spinner_oJFS.begin+0.4s" attributeName="x" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.4s" attributeName="y" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.4s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.4s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect></svg></div>
        </div>

      ) : (
        <>
        
        {viewType === 'list' && <ListView products={currentProducts} />}
        {viewType === 'card' && <CardView products={currentProducts} />}
        {viewType === 'table' && <TableView products={currentProducts} />}

          <div className="flex justify-center mt-6 space-x-2 cursor-pointer">
            <button onClick={goToPreviousPage} disabled={currentPage === 1} className="prev-button px-6  py-2 bg-gray-200 cursor-pointer text-black rounded-full disabled:opacity-50 hover:transition-transform hover:scale-105 duration-300" >   Prev </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i + 1}   onClick={() => handlePageClick(i + 1)}   className={`active-button border border-white px-4 py-2 rounded-full ${currentPage === i + 1 ? ' active-button  cursor-pointer  font-bold hover:transition-transform scale-120 hover:scale-125 text-black border border-white' : ' font-bold  text-black hover:transition-transform hover:scale-110 cursor-pointer duration-300 other-button'}`} >  {i + 1}</button>
            ))}

            <button onClick={goToNextPage} disabled={currentPage === totalPages} className="prev-button px-6 py-2 bg-gray-200 text-black font-bold rounded-full disabled:opacity-50 hover:transition-transform cursor-pointer hover:scale-105 duration-300" >   Next </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ContentCard;
