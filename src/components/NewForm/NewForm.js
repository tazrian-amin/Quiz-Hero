import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showToastMessage } from '../../utilities/utilities';

function NewForm({ options, correctAnswer }) {

    const handleOptionClick = (option) => {
        if (option === correctAnswer) {
            showToastMessage('Correct!');
        }
        else {
            showToastMessage('Incorrect!');
        }
    }

    return (
        <Form>
            <fieldset>
                {
                    options.map((option, idx) => <Form.Check onClick={() => handleOptionClick(option)}
                        key={idx}
                        type="radio"
                        label={option}
                        name="optionRadios"
                        id={option}
                    ></Form.Check>)
                }
                <ToastContainer />
            </fieldset>
        </Form>
    );
}

export default NewForm;