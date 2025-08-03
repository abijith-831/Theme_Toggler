import { useTheme } from "../ThemeContext";
import { VideoText } from "../Components/video-text";
import BlurInText from "../Components/BlurInText";
import ContentCard from "../Components/ContentCards/ContentCard";
import { useEffect, useState, useRef } from "react";

// ========= Video mapping for different themes ===========
const themeVideoMap: Record<string, string> = {
  light: "https://cdn.pixabay.com/video/2023/03/09/153957-806571952_large.mp4",
  dark: "https://cdn.pixabay.com/video/2022/09/20/131998-751915332_large.mp4",
  blue: "https://cdn.pixabay.com/video/2019/10/14/27915-366365905_large.mp4",
};

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
);

// Network Error Icon Component
const NetworkErrorIcon = () => (
  <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LandingPage = () => {
  const { theme } = useTheme();
  const [videoSrc, setVideoSrc] = useState(themeVideoMap[theme] || themeVideoMap["light"]);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const preloadVideo = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.src = src;
      
      const cleanup = () => {
        video.onloadeddata = null;
        video.onerror = null;
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current);
          loadingTimeoutRef.current = null;
        }
      };

      video.onloadeddata = () => {
        cleanup();
        resolve();
      };
      
      video.onerror = () => {
        cleanup();
        reject(new Error('Video failed to load'));
      };
      
      // Set timeout for slow connections
      loadingTimeoutRef.current = setTimeout(() => {
        cleanup();
        reject(new Error('Video load timeout'));
      }, 15000); // 15 second timeout
      
      video.load();
    });
  };

  const handleVideoChange = async (newTheme: string) => {
    const newVideoSrc = themeVideoMap[newTheme] || themeVideoMap["light"];
    
    if (newVideoSrc === videoSrc) return;

    setIsVideoLoading(true);
    setVideoError(false);

    try {
      await preloadVideo(newVideoSrc);
      setVideoSrc(newVideoSrc);
      setIsVideoLoading(false);
      setRetryCount(0);
      console.log('Video loaded successfully for theme:', newTheme);
    } catch (error) {
      setIsVideoLoading(false);
      setVideoError(true);
      console.error('Failed to load video for theme:', newTheme, error);
    }
  };

  const retryVideoLoad = async () => {
    if (retryCount >= 3) return;
    
    setRetryCount(prev => prev + 1);
    setVideoError(false);
    setIsVideoLoading(true);

    const currentVideoSrc = themeVideoMap[theme] || themeVideoMap["light"];
    
    try {
      await preloadVideo(currentVideoSrc);
      setVideoSrc(currentVideoSrc);
      setIsVideoLoading(false);
      setVideoError(false);
      console.log(`Video loaded on retry ${retryCount + 1} for theme:`, theme);
    } catch (error) {
      setIsVideoLoading(false);
      setVideoError(true);
      console.error(`Retry ${retryCount + 1} failed for theme:`, theme, error);
    }
  };

  useEffect(() => {
    handleVideoChange(theme);
  }, [theme]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="h-full">
      {/* =============Hero Section============== */}
      <div className="relative h-[200px] md:h-[350px] w-full overflow-hidden">
        {/* Loading State */}
        {isVideoLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 z-20">
            <LoadingSpinner />
            <div className="text-gray-600 dark:text-gray-400 text-sm mt-4 animate-pulse">
              Loading video...
            </div>
            {retryCount > 0 && (
              <div className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                Retry attempt {retryCount}/3
              </div>
            )}
          </div>
        )}

        {/* Error State */}
        {videoError && !isVideoLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 z-20">
            <NetworkErrorIcon />
            <div className="text-red-600 dark:text-red-400 text-sm mt-4 text-center px-4">
              Failed to load video
            </div>
            <div className="text-red-500 dark:text-red-500 text-xs mt-2 text-center px-4">
              Check your network connection
            </div>
            {retryCount < 3 ? (
              <button
                onClick={retryVideoLoad}
                className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Retry Loading ({3 - retryCount} attempts left)
              </button>
            ) : (
              <div className="text-red-400 text-xs mt-4 text-center px-4">
                Maximum retry attempts reached. Please refresh the page or check your connection.
              </div>
            )}
          </div>
        )}
        
        {/* VideoText Component - only render when not in error state */}
        {!videoError && (
          <VideoText 
            key={`${theme}-${videoSrc}`}
            src={videoSrc}
          >
            Change Theme
          </VideoText>
        )}
      </div>

      <div className="text-center px-4 w-[50%] mx-auto">
        <h2 className="choose-theme text-4xl font-semibold">
          Choose a theme to experience a variety of visual styles!
        </h2>
        <p className="each-theme mt-12 text-gray-600 dark:text-gray-400">
          Each theme offers a unique design and mood — personalize your journey through the UI.
        </p>
      </div>
      
      <br /><br />

      <div className="featured text-center">
        <BlurInText text="Featured Products" />
      </div>
      
      {/* ============ API results showing in this component =========== */}
      <ContentCard />
    </div>
  );
};

export default LandingPage;