import Toast from 'react-bootstrap/Toast';

function ShowToast() {
    return (
        <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Quiz Hero</strong>
            </Toast.Header>
            <Toast.Body>Correct Answer!</Toast.Body>
        </Toast>
    );
}

export default ShowToast;

