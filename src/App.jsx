import Navbar from "./Components/NavbarCollapse";
import CustomJumbotron from "./Components/Jumbotron";
import Grid from "./Components/Customcard";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="App-content">
        <CustomJumbotron />
      </div>
      <Container fluid className="App-grid">
        <Grid />
      </Container>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
