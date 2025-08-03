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
      <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map((product) => (
          <div key={product.id} className="hover:transition-transform hover:scale-101 duration-300">
            <div className="p-8 relative rounded-4xl shadow-2xl bg-[var(--bg-card)] text-[var(--text-primary)] transition-all duration-700">
              <div className="absolute top-2 left-2 md:top-3 md:left-3 lg:top-4 lg:left-4 rounded-full bg-white  text-[var(--text-primary)] px-2 py-1 xl:px-6 md:py-3 shadow">
                <h2 className="text-xs font-bold text-black">⭐{product.rating.rate}</h2>
              </div>
              <img src={product.image} alt={product.title} className="h-50 object-contain w-full mb-4" />
            </div>
            <div className="pt-6">
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-sm mb-2 text-[var(--text-secondary)]">{product.description.slice(0, 100)}...</p>
              <p className="font-extrabold text-xl ">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CardView;
  