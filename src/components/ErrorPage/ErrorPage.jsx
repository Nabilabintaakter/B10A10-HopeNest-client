import { Link } from "react-router-dom";
import bg from '../../assets/err2.png'


const ErrorPage = () => {
    return (
        <div className='w-full '>
            <div className='w-full flex justify-center items-center'>

                <div className="relative min-h-screen rounded-[5px] flex justify-center items-center">
                    <img src={bg} alt="" />
                    <Link to='/' className='absolute bottom-24 md:bottom-1 btn btn-sm  flex justify-center w-fit mx-auto shadow-none bg-transparent border-none font-rancho my-8 md:my-13'><i class="fa-solid fa-arrow-left text-xl mr-1 text-[#374151]"></i><span className='text-[#374151] text-lg md:text-3xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]'>Back to home</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;