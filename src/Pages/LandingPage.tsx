import { useEffect, useState } from "react";
import { VideoText } from "../Components/video-text";
import BlurInText from "../Components/BlurInText";
import ContentCard from "../Components/ContentCard";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const LandingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-full">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <VideoText src="https://cdn.pixabay.com/video/2024/05/25/213616_large.mp4">
          Change Theme
        </VideoText>
      </div>


      <div className="text-center mt-6 px-4 w-[50%] mx-auto">
        <h2 className="text-4xl font-semibold   ">
          Choose a theme to experience a variety of visual styles!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Each theme offers a unique design and mood — personalize your journey through the UI.
        </p>
      </div><br /><br />

      <div className="text-center ">
        <BlurInText text="Scroll for more"/>
      </div>
      <ContentCard/>
    </div>
  );
};

export default LandingPage;
