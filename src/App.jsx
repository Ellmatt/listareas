import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
   
      <BrowserRouter>
        <h1 className="display-4 text-center">Lista de tareas</h1>
        <hr />
       
        <Routes>
          <Route
            exact
            path="/"
            
          ></Route>
        </Routes>
        <FormularioTarea></FormularioTarea>
      </BrowserRouter>
    
  );
}

export default App;
