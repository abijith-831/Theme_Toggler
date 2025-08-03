import { Star, Eye, ShoppingCart } from 'lucide-react';

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
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
};

const TableView:React.FC<TableViewProps> = ({products}) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <th className="p-4 text-left font-semibold tracking-wide">Product</th>
            <th className="p-4 text-left font-semibold tracking-wide">Details</th>
            <th className="p-4 text-left font-semibold tracking-wide">Price</th>
            <th className="p-4 text-left font-semibold tracking-wide">Rating</th>
            <th className="p-4 text-left font-semibold tracking-wide">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {products.map((product, index) => (
            <tr 
              key={product.id} 
              className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              }`}
            >
              <td className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <img 
                      src={product.image} 
                      className="w-20 h-20 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110" 
                      alt={product.title} 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-300 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800 text-lg hover:text-indigo-600 transition-colors duration-200">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description.slice(0, 80)}...
                  </p>
                </div>
              </td>
              <td className="p-4">
                <div className="text-2xl font-bold text-green-600">
                  ${product.price}
                </div>
              </td>
              <td className="p-4">
                <div className="space-y-1">
                  {renderStars(product.rating.rate)}
                  <div className="text-xs text-gray-500">
                    {product.rating.count} reviews
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="flex space-x-2">
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-sm font-medium">Add to Cart</span>
                  </button>
                </div>
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
