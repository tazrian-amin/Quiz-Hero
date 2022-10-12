import React from 'react';
import NewForm from '../NewForm/NewForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { showToastMessage } from '../../utilities/utilities';

const Question = ({ singleQuestion }) => {

    const { options, question, correctAnswer } = singleQuestion;

    return (
        <div className='bg-dark bg-gradient m-4 py-4 pe-4 text-white border border-3 border-dark rounded position-relative'>
            <div className='w-75 mx-auto'>
                <h5 className='pb-2'>Question: {question}</h5>
                <NewForm options={options} correctAnswer={correctAnswer}></NewForm>
            </div>
            <div className='position-absolute top-0 end-0'>
                <button onClick={() => showToastMessage(correctAnswer)} className='btn btn-success mt-3 me-3'>
                    <FontAwesomeIcon icon={faEye} />
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Question;