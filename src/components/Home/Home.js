import Carousel from 'react-bootstrap/Carousel';
import { useLoaderData } from 'react-router-dom';

function CarouselInterval() {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <Carousel>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome To Quiz Hero</h3>
                    <p>Take the best mock quiz in different topics.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1509537257950-20f875b03669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Explore New Topics</h3>
                    <p>Get to know new topics and be confident.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Connect To Get More</h3>
                    <p>
                        Subscribe for Blog updates.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselInterval;