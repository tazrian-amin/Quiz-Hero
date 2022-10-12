import React from 'react';
import NewForm from '../NewForm/NewForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Question = ({ singleQuestion }) => {
    const { options, question, correctAnswer } = singleQuestion;

    const handleOptionClick = (option) => {

        if (option === correctAnswer) {
            console.log('Correct!');
        }
        else {
            console.log('Incorrect!');
        }
    }

    const showAnswer = () => {
        toast.success(`Answer: ${correctAnswer}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className='mb-4'>
            <div className='bg-dark bg-gradient m-2 p-4 text-white border border-3 border-dark rounded position-relative'>
                <div className='w-75 mx-auto'>
                    <h5 className='pb-2'>Question: {question}</h5>
                    <NewForm options={options} handleOptionClick={handleOptionClick}></NewForm>
                </div>
                <div className='position-absolute top-0 end-0'>
                    <button onClick={showAnswer} className='btn btn-success mt-3 me-3'>
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Question;