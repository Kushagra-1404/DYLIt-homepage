import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
const  App=()=> {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
