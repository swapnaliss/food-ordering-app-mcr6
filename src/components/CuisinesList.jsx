import React from 'react';
import {Container , Button } from "react-bootstrap";
import {cuisineData} from "../App"
const CuisinesList = () => {
  return (
    <div> 
    <Container>
    <h1>List of Cuisines</h1>
    <div className="d-flex flex-wrap">
      {cuisineData.map((cuisine) => (
        <Button key={cuisine.id} variant="primary" className="m-2">
          {cuisine.name}
        </Button>
      ))}
    </div>
  </Container> </div>
  )
}
export default CuisinesList;