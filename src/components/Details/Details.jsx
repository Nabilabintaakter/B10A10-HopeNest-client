import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const campaign = useLoaderData()
    return (
        <div>
            details of: {campaign.title}
        </div>
    );
};

export default Details;