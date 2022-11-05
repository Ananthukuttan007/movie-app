import React from 'react'
import Card from 'react-bootstrap/Card';

const Movie = ({ movie }) => {
    return (
        <Card className="movieCard" border="danger" text="dark" >
            <Card.Img variant="top" src={movie.Poster} />
            <div id="favo">
                <strong>Add to Favourites</strong>  &hearts;
            </div>
        </Card>
    )
}

export default Movie