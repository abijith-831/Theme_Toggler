import { Star , ShoppingCart } from 'lucide-react';

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

interface TableViewProps {
    products: Product[];
}
  
  

const renderStars = (rating:any) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? 'fill-yellow-400 text-yellow-400'
                : i === fullStars && hasHalfStar
                ? 'fill-yellow-400/50 text-yellow-400'
                : 'text-gray-500'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
};

const TableView:React.FC<TableViewProps> = ({products}) => {
  return (
    <div className="bg-white mt-12 rounded-xl shadow-2xl overflow-hidden border border-gray-200">
    <div className="w-full overflow-x-auto">
      <table className="min-w-[800px] w-full table-auto">
        <thead>
          <tr className="bg-gray-900 cursor-pointer  text-white">
            <th className="p-4 text-left font-semibold tracking-wide whitespace-nowrap">Product</th>
            <th className="p-4 text-left font-semibold tracking-wide whitespace-nowrap">Details</th>
            <th className="p-4 text-left font-semibold tracking-wide whitespace-nowrap">Price</th>
            <th className="p-4 text-left font-semibold tracking-wide whitespace-nowrap">Rating</th>
            <th className="p-4 text-left font-semibold tracking-wide whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={product.id} className={`transition-all   hover:bg-gray-100 duration-300 hover:shadow-md ${   index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300' }`}>
              <td className="p-4 whitespace-nowrap">
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <img src={product.image} className="w-20 h-20 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110" alt={product.title}/>
                    
                  </div>
                </div>
              </td>
              <td className="p-4 max-w-xs">
                <div className="space-y-2">
                  <h3 className="font-semibold cursor-pointer text-gray-800 text-base md:text-lg hover:text-indigo-600 transition-colors duration-200">
                    {product.title}
                  </h3>
                  <div className=" table-descr-text relative group text-sm mb-2  cursor-default">
                      {product.description.slice(0, 100)}...
                      
                      {/* Tooltip for full description */}
                      <div className="absolute z-20 w-72 p-3 text-xs text-white bg-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-2 left-1/2 -translate-x-1/2 translate-y-[-100%] whitespace-pre-line">
                        {product.description}
                      </div>
                    </div>

                </div>
              </td>
              <td className="p-4 whitespace-nowrap">
                <div className="text-lg text-black cursor-pointer md:text-2xl font-bold ">
                  ${product.price}
                </div>
              </td>
              <td className="p-4 whitespace-nowrap">
                <div className="space-y-1">
                  {renderStars(product.rating.rate)}
                  <div className="text-xs text-gray-500">
                    {product.rating.count} reviews
                  </div>
                </div>
              </td>
              <td className="p-4 whitespace-nowrap">
                <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-lg hover:from-gray-900 hover:to-gray-500 transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default TableView
