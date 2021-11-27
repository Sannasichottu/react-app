{/*
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export function EditMovie(){
    const {id} = useParams();
    const history= useHistory();

    const[movie, setMovie] =useState(null);
    useEffect(()=>{
        fetch(`https://619ba1512782760017445704.mockapi.io/movies/${id}`,{method:"GET",})
        .then((data)=>data.json())
        .then((mv)=>setMovie(mv));
    },[]);
    console.log("The Movie", movie, "name", movie.name);
    
    //only show update movie when the data is available
    return movie ? <updateMovie movie={movie}/>: "";
}


function updateMovie({movie}){
   const [name, setName] = useState(movie.name);
    const [poster, setPoster]= useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);

    const editMovie=() => {
      const updatedMovie = {
        name, 
        poster,
        rating,
        summary,
        trailer,
      };
      console.log(updateMovie);
    };

    fetch(`https:619ba1512782760017445704.mockapi.io/movies/${movie.id}`,
    { method:"PUT",
      body: JSON.stringify(updateMovie),
      headers:{'Content-Type': 'application/json'  }
    }).then(()=>history.push("/movies"));

    return(  <div className="add-movie-form">
      <TextField 
         value={name}
         onChange={(event)=>setName(event.target.value)}
        label="Name" 
        variant="filled" />

        <TextField 
         value={poster}
         onChange={(event)=>setPoster(event.target.value)}
        label="Poster" 
        variant="filled" />

        <TextField 
         value={rating}
         onChange={(event)=>setRating(event.target.value)}
        label="Rating" 
        variant="filled" />

        <TextField 
         value={summary}
         onChange={(event)=>setSummary(event.target.value)}
        label="Summary" 
        variant="filled" />

        <TextField 
         value={trailer}
         onChange={(event)=>setTrailer(event.target.value)}
        label="Trailer" 
        variant="filled" />

        <button  onClick={editMovie} variant="outlined">SAVE</button>
        </div>
       );
   
  } */}
