import {  Zoom } from 'react-awesome-reveal';
import CampaignCard from './CampaignCard';
import Container from '../Container/Container';

const RunningCampaigns = ({ campaigns }) => {
    return (
        <Container>
            <div className='py-5 md:py-10 lg:py-12 font-sans'>
            <Zoom triggerOnce duration={2000}>
                <div className="flex justify-center items-center mb-8 md:mb-12 ">
                    <div className="text-center">
                        <h1 className="font-semibold text-[#374151] dark:text-white text-3xl md:text-4xl  mb-2 md:mb-4">Running Campaigns: Make an Impact Today</h1>
                        <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] dark:text-gray-300 w-full md:w-[70%] mx-auto">Explore active campaigns needing your support! Contribute before their deadlines and make a meaningful impact today!</p>
                    </div>
                </div>
            </Zoom>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    campaigns.map(campaign =>
                        <CampaignCard campaign={campaign} key={campaign._id}></CampaignCard>
                    )
                }
            </div>
        </div>
        </Container>
    );
};

export default RunningCampaigns;