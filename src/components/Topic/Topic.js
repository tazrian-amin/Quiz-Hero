import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo } = topic;
    return (
        <div className='col'>
            <div className='text-center text-white border border-3 border-dark rounded bg-danger bg-gradient py-2 my-4'>
                <img className='w-25' src={logo} alt="" />
                <h2>{name}</h2>
                <button className='btn btn-dark'>Take Quiz</button>
            </div>
        </div>
    );
};

export default Topic;