import { ShoppingCart } from "lucide-react";

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
  
  interface ListViewProps {
    products: Product[];
  }
  
  const ListView: React.FC<ListViewProps> = ({ products }) => {
    return (
      <div className="flex flex-col gap-6 px-6 mt-12">
        {products.map((product) => (
          <div key={product.id} className="list-div flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 rounded-xl shadow-md bg-[var(--bg-card)] hover:transition-transform hover:scale-101 duration-300">
            {/* ===========Left side ========= */}
            <div className=" flex flex-col sm:flex-row rounded-xl gap-6 w-full">
              <img  src={product.image}  alt={product.title}  className="w-full rounded-md sm:w-32 sm:h-32 object-contain"/>
              <div className="flex-1">
                <h2 className="product-title font-bold text-lg md:text-xl">{product.title}</h2>
                <p className="text-[var(--text-secondary)] text-sm md:text-base">
                  {product.description.slice(0, 150)}...
                </p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
                <button className="bg-gradient-to-r mt-3 mx-2 from-gray-700 to-gray-900 text-white px-4 py-2 rounded-lg hover:from-gray-900 hover:to-gray-500 transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
  
            {/* ==============Right side============= */}
            <div className="flex flex-row relative md:flex-col justify-between items-end md:items-end w-full md:w-auto mt-4 md:mt-0">
              <span className="text-sm   font-medium top-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                ⭐{product.rating.rate}
              </span>
              <span className="text-sm font-bold text-black mt-2 md:mt-6">
                <div className="flex">
                    <span >

                {product.rating.count} 
                    </span>
                    <span className="px-2">

                reviews
                    </span>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ListView;
  