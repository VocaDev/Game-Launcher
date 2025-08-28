import { ListGroup } from "react-bootstrap";


const Sidebar = ({genres, onSelectGenre}) => {
    return (  
        <ListGroup variant="flush" className="sidebar-list">
            {genres.map((genre, idx) => (
                <ListGroup.Item
                    action
                    key={idx}
                    onClick={() => onSelectGenre(genre)}
                >
                    {genre}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
 
export default Sidebar;