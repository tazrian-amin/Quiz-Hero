import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicDetails = () => {
    const { data } = useLoaderData();
    // console.log(data);
    const { name, questions } = data;
    return (
        <div>
            <h2 className='text-center'>Quiz on <strong>{name}</strong></h2>
            <div>
                {
                    questions.map(singleQuestion => <Question
                        key={singleQuestion.id}
                        singleQuestion={singleQuestion}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default TopicDetails;