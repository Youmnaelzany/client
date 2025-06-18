import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import BlurCircle from "./BlurCircle";

const FeatureSection = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden px-6 md:px-16 lg:px-24 xl:px-44">
      {/* TITLE */}
      <div className="bg-10 relative flex items-center justify-between pt-20">
        {/* BLUR BACKGROUND */}
        <BlurCircle top="0" right="-80px" />
        <p className="text-lg font-medium text-gray-300">Now Showing</p>
        <button
          className="group flex cursor-pointer items-center gap-2 text-sm text-gray-300"
          onClick={() => navigate("/movies")}
        >
          View All
          <ArrowUpRight className="size-4.5 transition group-hover:translate-x-0.5" />
        </button>
      </div>
      {/* MOVIE LIST */}
      <div className=""></div>
      {/* BUTTON */}
      <div className="mt-20 flex justify-center">
        <button
          className="bg-primary hover:bg-primary-dull cursor-pointer rounded-md px-10 py-3 text-sm font-medium transition"
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
        >
          Show More
        </button>
      </div>
    </div>
  );
};
export default FeatureSection;
