import Card from 'react-bootstrap/Card';


const GameCard = ({game}) => {
    return ( 
        <Card className='h-100 shadow-sm'>
            <Card.Img
            variant='top'
            src={game.image}
            alt={game.title}
            style={{height: "200px", objectFit: "cover"}}
            />
            <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.genre}</Card.Text>
                <button variant="primary">Play</button>
            </Card.Body>
        </Card>
     );
}
 
export default GameCard;