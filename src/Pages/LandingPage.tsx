import { useTheme } from "../ThemeContext";
import { VideoText } from "../Components/video-text";
import BlurInText from "../Components/BlurInText";
import ContentCard from "../Components/ContentCards/ContentCard";

const themeVideoMap: Record<string, string> = {
  light: "https://cdn.pixabay.com/video/2023/03/09/153957-806571952_large.mp4",
  dark: "https://cdn.pixabay.com/video/2022/09/20/131998-751915332_large.mp4",
  blue: "https://cdn.pixabay.com/video/2023/03/09/153957-806571952_large.mp4",
};


const LandingPage = () => {
  const { theme } = useTheme();

  const videoSrc = themeVideoMap[theme] || themeVideoMap["light"]; // fallback to light

  return (
    <div className="h-full">
      {/* Hero Section */}
      <div className="relative h-[350px] w-full overflow-hidden">
        <VideoText src={videoSrc}>
          Change Theme
        </VideoText>
      </div>

      <div className="text-center mt-6 px-4 w-[50%] mx-auto">
        <h2 className="text-4xl font-semibold">
          Choose a theme to experience a variety of visual styles!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Each theme offers a unique design and mood — personalize your journey through the UI.
        </p>
      </div><br /><br />

      <div className="text-center">
        <BlurInText text="Featured Products" />
      </div>
      <ContentCard />
    </div>
  );
};

export default LandingPage;
