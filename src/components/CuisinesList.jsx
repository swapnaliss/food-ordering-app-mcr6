import React, { useState } from 'react';
import {  Card, Row, Col,Button } from 'react-bootstrap';
import { cuisineData, restaurantsData } from './Data';

const CuisinesList = () => {


    const [selectedCuisine, setSelectedCuisine] = useState(null);

    const handleCuisineClick = (cuisine) => {
        setSelectedCuisine(cuisine);
    };

    const filteredRestaurants = selectedCuisine
        ? restaurantsData.filter((restaurant) => restaurant.cuisine_id === selectedCuisine.id)
        : [];

    return (
       <div>
         <h1>List of Cuisines</h1>
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
        { selectedCuisine && (
            <div>
                <h2>Restaurants for {selectedCuisine.name}</h2>
                <Row>
                    {filteredRestaurants.map((restaurant) => (
                        <Col key={restaurant.id} sm={6} md={4} lg={3} className="mb-3">
                            <Card>
                                <Card.Img variant="top" src={restaurant.menu[0].imgSrc} />
                                <Card.Body>
                                    <Card.Title>{restaurant.name}</Card.Title>
                                    <Card.Text>Price: {restaurant.menu[0].price}</Card.Text>
                                    <Card.Text>Food: {restaurant.menu[0].name}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )}
     </div>
    )  
}
export default CuisinesList;