import Form from 'react-bootstrap/Form';

function NewForm({ options }) {
    // console.log(options);
    return (
        <Form>
            <fieldset>
                {
                    options.map((option, idx) => <Form.Check
                        key={idx}
                        type="radio"
                        label={option}
                        name="optionRadios"
                        id={option}
                    ></Form.Check>)
                }
            </fieldset>
        </Form>
    );
}

export default NewForm;