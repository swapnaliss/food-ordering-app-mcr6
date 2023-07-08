import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { restaurantsData } from './Data';
import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

function RestaurantDetailPage() {
    const { id } = useParams();
    const restaurantId = parseInt(id, 10);
    const navigate = useNavigate();

    const restaurant = restaurantsData.find((restaurant) => restaurant.id === restaurantId);

    if (!restaurant) {
        return <h2>Restaurant not found</h2>;
    }

    return (
        <Container>
            <Row style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <Col className='card-col'>
                    <div>
                        <button className="btn btn-primary" onClick={() => navigate(-1)}>
                            Back
                        </button>
                        <h1>{restaurant.name}</h1>
                        <p >Address: {restaurant.address}</p>
                    </div>

                    <button className="btn  review-btn">Add Review</button>
                </Col>
            </Row>

            <h2>Ratings & Reviews</h2>
            {restaurant.ratings.map((rating, index) => (
                <div key={index} style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <Badge variant="success" className="mr-2">
                        {rating.rating} <FaStar />
                    </Badge>
                    <p>Comment: {rating.comment}</p>
                    <p>Reviewer Name: {rating.revName}</p>
                    <Image src={rating.pp} alt="Reviewer Profile" roundedCircle style={{ width: '100px' }} />
                </div>
            ))}
        </Container>
    );
}

export default RestaurantDetailPage;
