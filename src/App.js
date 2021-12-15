import logo from './logo.svg';
import './App.css';
import Layout from './Components/Project/Layout';
import Navbar from './Components/Navbar/Navbar';
import Heading from './Components/Heading';
import Footer from './Footer/Footer';
function App() {
  const data = [0,1,2,3,4,5,6,7,8]
  return (
    <div className="App">
      
      <Navbar/>
      <Heading/>
      <div className="card-parent">
      <div className="Cards">
      {data.map((cards,index) =>{
        return <Layout key={index}/>

      })}
      </div>
     
      </div>
      
      <Footer/>
      
    </div>
  );
}

export default App;
