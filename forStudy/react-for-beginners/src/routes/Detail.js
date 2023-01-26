import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const [movieDtl, setMovieDtl] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json =await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDtl(json.data.movie);
        setLoading(false);
        console.log(movieDtl);
        console.log(movieDtl.title_long);
    };
    useEffect(() =>{
        getMovie();
    },[]);
    console.log(id);
    return (
        <div>
            {loading ? <h1 style={{color: 'blue'}}>로딩중...</h1> : 
                    <div>
                    <button onClick = {()=> window.location.href = "/"} style={{width:'220px'}}>홈으로</button>
                    <div style={{marginTop:'30px'}}>
                        <img src={movieDtl.medium_cover_image} alt={movieDtl.title}></img>
                        <table style={{border:'solid 2px black', marginTop:'20px', borderColor: 'grey', width:'100%'}}>
                            <h1 style={{textAlign:'center'}}>{movieDtl.title_long}</h1>
                            <h2 style={{padding:'30px'}}>내용: <br/> {movieDtl.description_full}</h2>
                            <h2 style={{padding:'30px'}}>장르: {movieDtl.genres.map((genre)=> <li>{genre}</li>)}</h2>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}

export default Detail;