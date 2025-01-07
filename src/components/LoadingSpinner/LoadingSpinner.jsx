import { Watch } from "react-loader-spinner";

const LoadingSpinner = () => {
    return (
      <div className='min-h-[calc(100vh-373px)] flex justify-center items-center'>
                <Watch
                    visible={true}
                    height="80"
                    width="80"
                    radius="48"
                    color="#FFA71D"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
      </div>
    )
  }
  
  export default LoadingSpinner;