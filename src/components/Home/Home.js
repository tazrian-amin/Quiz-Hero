import Carousel from 'react-bootstrap/Carousel';

function CarouselInterval() {
    return (
        <Carousel className='w-75 mx-auto mt-4'>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100 rounded"
                    src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='fs-sm-5 fs-md-1'>Welcome To Quiz Hero</h1>
                    <p className='d-none d-md-block fs-4'>Hello Learner! We are here to you with the best user experience educational website. You can attend quiz, get correct answers, statistical data, and more on blog page.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100 rounded"
                    src="https://images.unsplash.com/photo-1509537257950-20f875b03669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>Test Your Ability</h1>
                    <p className='fs-md-4'>Take the best mock quiz in different topics.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>Explore Blog</h1>
                    <p className='fs-md-4'>Get to know new topics on the Blog section and be confident.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselInterval;