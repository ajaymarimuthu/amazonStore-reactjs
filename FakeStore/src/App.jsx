
import './App.css'
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from './components/ProductListing/ProductListing';
import ProductDetails from './components/ProductDetail/ProductDetails';


function App() {


  return (
    <div className="App">

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/product" element={<ProductDetails/>} />
          <Route>404 Not Found</Route>
        </Routes>

      </Router>



    </div>
  )
}

export default App
