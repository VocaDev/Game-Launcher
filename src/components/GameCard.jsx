import Card from 'react-bootstrap/Card';


const GameCard = ({game}) => {
    return ( 
        <Card className='h-100 shadow-sm'>
            <Card.Img
            variant='top'
            src={`https://via.placeholder.com/300x180?text=${game.title}`}
            alt={game.title}
            />
            <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text className='text-muted'>
                    {game.genre}
                </Card.Text>
            </Card.Body>
        </Card>
     );
}
 
export default GameCard;