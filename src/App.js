import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Project/Layout";
import Navbar from "./Components/Navbar/Navbar";
import Heading from "./Components/Heading";
import Footer from "./Footer/Footer";
const App = () => {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <div className="card-parent">
        <div className="Cards">
          {data.map((cards, index) => {
            return (
              <div key={index}>
                <Layout />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;
