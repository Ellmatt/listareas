import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
   
      <Container>
        <h1 className="display-4 text-center">Lista de tareas</h1>
        <hr />
       
        
        <FormularioTarea></FormularioTarea>
      </Container>
    
  );
}

export default App;
