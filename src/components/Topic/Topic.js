import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='col'>
            <div className='text-center text-white border border-3 border-dark rounded bg-danger bg-gradient py-2 my-4'>
                <img className='w-25' src={logo} alt="" />
                <h2>{name}</h2>
                <p>{total} Questions</p>
                <button className='btn btn-dark'>
                    <Link className='text-decoration-none text-white' to={`/topics/${id}`}>Take Quiz</Link>
                </button>
            </div>
        </div>
    );
};

export default Topic;