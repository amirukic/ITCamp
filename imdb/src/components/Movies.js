import { useState } from "react"
import { Card, Text } from "@nextui-org/react";

function Movies() {

    const [movie,setMovie] = useState([])
  async function data() {
    const res = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=2iKb0RFQij2NkYasKkXOB0geMv1gsKAmfBEPhoFI"
    );
    const resJson = await res.json();
    const movie = resJson
    setMovie(movie)
    }
    data();
    
  
    return <div>
        <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
      <Card.Body>
        <img src="https://apod.nasa.gov/apod/image/2209/LightningStarTrails_Llimos_960.jpg"></img>
        <Text>{movie.copyright}</Text>
        <Text>{movie.date}</Text>
        <Text>{movie.explanation}</Text>
      </Card.Body>
    </Card>
    </div>
  }

export default Movies;
