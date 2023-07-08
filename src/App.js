import CuisinesList from "./components/CuisinesList"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RestaurantDetailes from './components/RestaurantDetailes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App() {

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<CuisinesList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetailes />} />
        </Routes>
      </Container>
    </Router>

  );
}

export default App;
