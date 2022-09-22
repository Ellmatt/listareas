import { Button, ListGroup} from "react-bootstrap";
const ItemTarea = () => {
    return (
        
          <ListGroup.Item className="d-flex justify-content-between">
            Tarea de Prueba 
            <Button variant="danger">Borrar</Button>
            </ListGroup.Item>
       
    );
};

export default ItemTarea;