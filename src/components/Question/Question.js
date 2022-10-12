import React from 'react';
import NewForm from '../NewForm/NewForm';

const Question = ({ singleQuestion }) => {
    const { options, question, correctAnswer } = singleQuestion;
    return (
        <div className='mb-4'>
            <div className='bg-danger bg-gradient m-2 p-4 text-white border border-3 border-dark rounded'>
                <h5 className='pb-2'>Question: {question}</h5>
                <NewForm options={options}></NewForm>
            </div>
            <div className='bg-success bg-gradient m-2 px-4 py-2 text-white border border-3 border-dark rounded'>
                <h6>Correct Answer: {correctAnswer}</h6>
            </div>
        </div>
    );
};

export default Question;