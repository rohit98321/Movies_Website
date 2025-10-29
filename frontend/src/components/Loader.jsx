import { ClipLoader } from "react-spinners";
const Loader = () => {
    return (
    //   <div className="flex justify-center items-center h-64">
    //     <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    //   </div>

    <div className="flex justify-center items-center h-64">
    <ClipLoader color="#3b82f6" size={60} />
  </div>



    );
  };
  
  export default Loader;
  