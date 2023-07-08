import CuisinesList from "./components/CuisinesList"
import 'bootstrap/dist/css/bootstrap.min.css';

export const cuisineData = [
  { id: 1, name: "Italian", reviews: [], averageRating: 4 },
  { id: 2, name: "Mexican", reviews: [], averageRating: 4 },
  { id: 3, name: "Chinese", reviews: [], averageRating: 4 },
  { id: 4, name: "Indian", reviews: [], averageRating: 4 }
];

function App() {
  
  return (
    <div className="App">
       <CuisinesList/>
    </div>
  );
}

export default App;
