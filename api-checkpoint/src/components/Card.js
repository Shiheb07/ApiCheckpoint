import Card from 'react-bootstrap/Card';

const CustomCard = ({user}) => {
  return (
    <div>
    <Card style={{ width: '18rem',marginBottom:10}}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">user infos</Card.Subtitle>
        <Card.Text>
          <span> email : {user.email} </span> <br />
          <span> adresse : {user.address.city} {user.address.street} </span> <br />
          <span> phone : {user.phone} </span> 
        </Card.Text>
        <Card.Link href="#">see mor details</Card.Link>
   
      </Card.Body>
    </Card>
    </div>
  )
}

export default CustomCard