import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeatureSection = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden px-6 md:px-16 lg:px-24 xl:px-44">
      {/* TITLE */}
      <div className="">
        <p className="">Now Showing</p>
        <button
          className="group flex items-center gap-2 text-sm text-gray-300"
          onClick={() => navigate("/movies")}
        >
          View All
          <ArrowUpRight className="size-4.5 transition group-hover:translate-x-0.5" />
        </button>
      </div>
      {/* MOVIE LIST */}
      <div className=""></div>
      {/* BUTTON */}
      <div className=""></div>
    </div>
  );
};
export default FeatureSection;
