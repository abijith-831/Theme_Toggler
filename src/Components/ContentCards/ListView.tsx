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
  


const ListView:React.FC<ListViewProps> = ({products}) => {
  return (
    <div className="flex flex-col gap-6">
    {products.map((product) => (
      <div key={product.id} className="flex justify-between items-start gap-6 p-6 rounded-xl shadow-md bg-[var(--bg-card)]">
        
        <div className="flex gap-6">
          <img src={product.image} className="w-32 h-32 object-contain" alt={product.title} />
          <div>
            <h2 className="font-bold text-xl">{product.title}</h2>
            <p className="text-[var(--text-secondary)]">{product.description.slice(0, 150)}...</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        </div>

        
        <div className="flex flex-col justify-between items-end min-h-32">
          <span className="text-sm font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
            ⭐ {product.rating.rate}
          </span>
          <span className="text-sm font-bold  text-gray-500 mt-6">
            {product.rating.count} sold
          </span>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ListView
