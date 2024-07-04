import React from 'react'
// import dummy from '../db/data.json'
import { useParams, useNavigate } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';

export default function Day() {
    // dummy.words
    const a = useParams();
    const day = a.day;


    const navigate = useNavigate();

    let words = useFetch(`http://localhost:3001/words?day=${day}`);
    let days = useFetch('http://localhost:3001/days');

  return (
    <>
    <div style={{display : 'flex', alignItems : 'center', flexDirection : 'row', justifyContent : 'space-between'}}>
      {day ==='1' ? <button style={{visibility : 'hidden'}}></button> :<button onClick={()=>{
        navigate(`/day/${Number(day) - 1}`);
      }}>이전 일</button>}
      <h2>Day {day}</h2>
      {days.length === Number(day) ? <button style={{visibility : 'hidden'}}></button> :<button onClick={()=>{
        navigate(`/day/${Number(day) + 1}`);
      }}>다음 일</button>}
      
    </div>
    {words.length === 0 && <span>Loading</span>}
    <table>
        <tbody>
            {words.map( word => (
                <Word word = {word}  key={word.id} />
            ))}
        </tbody>

    </table>
    </>
  )
}
