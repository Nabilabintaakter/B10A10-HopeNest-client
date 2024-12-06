import slider1 from '../../assets/slider1.avif'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation,EffectFade } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'} 
                navigation={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Navigation, Pagination, EffectFade]} 
                className="mySwiper"
            >

                <SwiperSlide>
                    <div
                        className="hero h-[400px]"
                        style={{
                            backgroundImage: `url(${slider1})`,
                        }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="text-white">
                                <h1 className="font-libre w-full mb-5 text-3xl md:text-4xl font-bold max-w-5xl ">EMPOWER  EDUCATION  FOR  ALL</h1>
                                <p className="mb-5 text-sm md:text-base font-sans max-w-3xl mx-auto">
                                    Your small donation can make a big difference in a child’s education, opening doors to brighter futures, unlocking potential, and empowering them to break the cycle of poverty.
                                </p>
                                <button className="font-sans btn bg-[#FFA71D] border-none">Support Education</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div
                    className="hero h-[400px]"
                    style={{
                        backgroundImage: `url(${slider2})`,
                    }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="text-white">
                            <h1 className="font-libre w-full mb-5 text-3xl md:text-4xl font-bold max-w-5xl">SUPPORT DISASTER RELIEF EFFORTS"</h1>
                            <p className="mb-5 text-sm md:text-base font-sans max-w-3xl mx-auto">
                                Help us provide essential supplies to families in need, ensuring they have access to food, clothing, and other necessities for a safe, healthy, and dignified life. Together, we can offer hope and support to those facing difficult times.
                            </p>
                            <button className="font-sans btn bg-[#FFA71D] border-none">Support a Family</button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero h-[400px]"
                        style={{
                            backgroundImage: `url(${slider3})`,
                        }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="text-white">
                                <h1 className="font-libre w-full mb-5 text-3xl md:text-4xl font-bold max-w-5xl">JOIN HANDS FOR A HEALTHIER TOMORROW</h1>
                                <p className="text-sm md:text-base mb-5 font-sans max-w-3xl mx-auto">
                                    Contribute to life-saving medical assistance for vulnerable communities and help provide critical care to those who need it the most. Your generosity can bring hope and healing to people facing life-threatening conditions.
                                </p>
                                <button className="font-sans btn bg-[#FFA71D] border-none">Make a Difference</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default Banner;
