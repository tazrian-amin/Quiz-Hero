import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-4 text-white row row-cols-1 g-4'>
            <div className='col p-3 border border-3 border-dark rounded bg-danger bg-gradient '>
                <h3 className='fw-bold'>What is the purpose of React Router?</h3>
                <p>Answer</p>
            </div>
            <div className='col p-3 border border-3 border-dark rounded bg-danger bg-gradient '>
                <h3 className='fw-bold'>How does Context API work?</h3>
                <p>Answer</p>
            </div>
            <div className='col p-3  border border-3 border-dark rounded bg-danger bg-gradient '>
                <h3 className='fw-bold'>What are the use of the hook useRef()?</h3>
                <p>Answer</p>
            </div>
        </div>
    );
};

export default Blog;