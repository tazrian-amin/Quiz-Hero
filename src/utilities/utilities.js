import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// common function to load data 
const loadQuiz = async () => {
    const quizData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const quiz = await quizData.json();
    return quiz;
}

// common function to show toast message 
const showToastMessage = (message) => {
    toast.success(`Answer: ${message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export { loadQuiz, showToastMessage };