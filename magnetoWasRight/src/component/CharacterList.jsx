import { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CharacterList(){
    const [characters, setCharacters] = useState([]);

    useEffect(()=> {
        fetch('/data/character.json')
            .then(response => response.json())
            .then(data => setCharacters(data));  
    }, []);

    return (
        <Row xs ={1} md={2} lg={3}>
            {characters.map(character => (
                <Col style={{width:'18rem'}} key = {character.alias} className="mb-4">
                    <CardTemplate character={character}/>
                </Col>
            ))}
        </Row>
    )
}

export default CharacterList;