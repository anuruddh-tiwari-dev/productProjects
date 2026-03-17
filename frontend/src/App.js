import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import Signup from "./pages/Signup"
import ProductDetail from "./pages/ProductDetail"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/signup" element={<Signup/>} />

<Route path="/product/:id" element={<ProductDetail/>} />

</Routes>

</BrowserRouter>

);

}

export default App;