import { loading } from "../assets";

const Generating = ({ className, isLoading = true }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-gray-100 rounded-[1.7rem] ${
        className || ""
      } text-base transition-all duration-300 ${isLoading ? 'animate-pulse' : ''}`}
    >
      <img
        src={loading}
        alt="Loading"
        className={`w-5 h-5 mr-4 ${isLoading ? 'animate-spin' : ''} pointer-events-none select-none`}
      />
      <span className="animate-pulse text-black">
        {isLoading ? "AI is generating..." : "AI generated successfully!"}
      </span>
    </div>
  );
};

export default Generating;
