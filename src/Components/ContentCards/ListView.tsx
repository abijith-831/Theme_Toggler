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
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 rounded-xl shadow-md bg-[var(--bg-card)]">
            {/* Left side: image and details */}
            <div className="flex flex-col sm:flex-row rounded-xl gap-6 w-full">
              <img  src={product.image}  alt={product.title}  className="w-full rounded-md sm:w-32 sm:h-32 object-contain"/>
              <div className="flex-1">
                <h2 className="font-bold text-lg md:text-xl">{product.title}</h2>
                <p className="text-[var(--text-secondary)] text-sm md:text-base">
                  {product.description.slice(0, 150)}...
                </p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
              </div>
            </div>
  
            {/* Right side: rating and sold */}
            <div className="flex flex-row md:flex-col justify-between items-end md:items-end w-full md:w-auto mt-4 md:mt-0">
              <span className="text-sm font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                ⭐{product.rating.rate}
              </span>
              <span className="text-sm font-bold text-gray-500 mt-2 md:mt-6">
                {product.rating.count} sold
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ListView;
  