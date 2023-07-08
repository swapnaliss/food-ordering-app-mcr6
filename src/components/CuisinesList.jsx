import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { cuisineData, restaurantsData } from './Data';
import { useNavigate } from 'react-router-dom';

const CuisinesList = () => {

    const [selectedCuisine, setSelectedCuisine] = useState(null);
    const navigate = useNavigate();

    const handleCuisineClick = (cuisine) => {
        console.log(cuisine)
        setSelectedCuisine(cuisine);
    };

    const filteredRestaurants = selectedCuisine
        ? restaurantsData.filter((restaurant) => restaurant.cuisine_id === selectedCuisine.id)
        : [];

    return (
        <div>
            <h1>Food Ordering App</h1>
            <h4 className='app-subtitle'>Select your Cuisine:</h4>
            <div className="d-flex flex-wrap">
                {cuisineData.map((cuisine) => (
                    <Button
                        key={cuisine.id}
                        variant={selectedCuisine === cuisine ? 'primary' : 'secondary'}
                        className="m-2"
                        onClick={() => handleCuisineClick(cuisine)}
                    >
                        {cuisine.name}
                    </Button>
                ))}
            </div>
            {selectedCuisine && (
                <div>
                    {filteredRestaurants.map((restaurant) => (
                        <Row key={restaurant.id}>
                            <Card.Title>
                                <h4>Dishesh by {restaurant.name} </h4>
                            </Card.Title>
                            {restaurant.menu.map((menuItem, index) => (
                                <Col sm={6} md={4} lg={3} className="mb-3" key={index}>
                                    <Card onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
                                        <Card.Img className='card-img' variant="top" src={menuItem.imgSrc} />
                                        <Card.Body>
                                            <Card.Text>Food: {menuItem.name}</Card.Text>
                                            <Card.Text>Price: {menuItem.price}</Card.Text>
                                            <Card.Text>{restaurant.name}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ))}

                </div>
            )}
        </div>
    )
}
export default CuisinesList;