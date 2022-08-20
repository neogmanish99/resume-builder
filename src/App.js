import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import HorizontalLinearStepper from "./components/HorizontalLinearStepper";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Nav />
      <Container>
        <HorizontalLinearStepper />
      </Container>
    </>
  );
}

export default App;
