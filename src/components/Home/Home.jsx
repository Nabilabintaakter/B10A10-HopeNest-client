
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import RunningCampaigns from '../RunningCampaigns/RunningCampaigns';

const Home = () => {
    const campaigns = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <RunningCampaigns campaigns={campaigns}></RunningCampaigns>
        </div>
    );
};

export default Home;