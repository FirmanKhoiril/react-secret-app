import { FidgetSpinner } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <FidgetSpinner visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" ballColors={["#ff0000", "#00ff00", "#3b82f6"]} backgroundColor="#000" />
    </div>
  );
};

export default Loading;
