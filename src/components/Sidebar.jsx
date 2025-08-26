import { ListGroup } from "react-bootstrap";


const Sidebar = ({genres, onSelectGenre}) => {
    return (  
        <aside className="bg-light p-3" style={{minHeight: "100vh"}}>
           <h5 className="mb-3" >Genres</h5>
           <ListGroup>
            {genres.map((genre, index) => (
                <ListGroup.Item
                    key={index}
                    action
                    onClick={() => onSelectGenre && onSelectGenre(genre)}
                >
                    {genre}
                </ListGroup.Item>
            ))}
           </ListGroup>
        </aside>
    );
}
 
export default Sidebar;