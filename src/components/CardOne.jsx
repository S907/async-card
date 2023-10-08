import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardOne = ({desc, name, idVal, value, url}) => {
  return (
    
    <Card className='mx-3 my-2' style={{ width: '18rem'}} id={idVal}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Card.Text>
          {name}
        </Card.Text>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Text>
          {value}
        </Card.Text>
        <Button variant="primary">Increment+</Button>
      </Card.Body>
    </Card>
  );
}

export default CardOne;