import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {

    const { data } = useLoaderData();

    return (
        <div className='d-flex flex-column align-items-center justify-content-center mb-4'>
            <h2 className='my-4 py-4'>BarChart Showing Total Marks Per Subject</h2>
            <BarChart width={400} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#dc3545" />
            </BarChart>
        </div>
    );
};

export default Statistics;

