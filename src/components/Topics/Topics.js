import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const { data } = useLoaderData();
    // console.log(data);
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-auto w-100'>
            {
                data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;