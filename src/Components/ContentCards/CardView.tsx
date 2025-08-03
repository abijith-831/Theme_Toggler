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
  
  interface CardViewProps {
    products: Product[];
  }
  
  const CardView: React.FC<CardViewProps> = ({ products }) => {
    return (
      <div className="grid mt-12 grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <div key={product.id} className="hover:transition-transform  hover:scale-102 duration-300">
            <div className="p-8 relative rounded-4xl shadow-2xl bg-[var(--bg-card)] text-[var(--text-primary)] transition-all duration-700">
            {/* Rating Badge */}
                <div className="absolute top-2 left-2 md:top-3 md:left-3 lg:top-4 lg:left-4 rounded-full bg-white text-[var(--text-primary)] px-2 py-1 xl:px-6 md:py-3 shadow">
                    <h2 className="text-xs font-bold text-black">⭐{product.rating.rate}</h2>
                </div>

                {/* Product Image */}
                <img src={product.image} alt={product.title} className="h-50 object-contain w-full mb-4" />

                {/* Cart Button with Tooltip */}
                <div className="absolute group top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4">
                    <div className="flex items-center justify-center rounded-full bg-white text-[var(--text-primary)] p-2 shadow cursor-pointer hover:bg-gray-200 transition">
                    <ShoppingCart className="w-5 h-5 text-black" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute right-10 top-10 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap shadow-lg">
                    Add to Cart
                    </div>
                </div>
            </div>

            <div className="pt-6">
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-sm mb-2 text-[var(--text-secondary)]">{product.description.slice(0, 100)}...</p>
              <div className="flex justify-between">
                <span className="font-extrabold text-xl ">${product.price}</span>
                <span className="font-bold text-sm">{product.rating.count} reviews</span>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CardView;
  