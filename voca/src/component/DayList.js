import React from 'react'
import dummy from '../db/data.json'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

export default function DayList() {

    let days = useFetch('http://localhost:3001/days');
    let sortedDays = days.slice().sort((a, b) => a.day - b.day);
    // const [dayList, setDayList] = useState(days);

    if(days.length ===0) {
      return <span>Loading...</span>
    }

    async function del(id,day) {

       
      
      if(window.confirm('삭제하시겠습니까?')){

          let words = [];

          await fetch(`http://localhost:3001/words?day=${day}`)
          .then( res => {
              return res.json()
          })
          .then( data => {
              words = data;
          })


          if(words.length > 0){

            let delChk = 0;

            await Promise.all(
            words.map(async (word) => {
              await fetch(`http://localhost:3001/words/${word.id}`, {
                  method : 'DELETE',
              })
              .then(res => {
                if(res.ok){
                  delChk ++;
                } 
              })
            })
            );

            if(delChk === words.length){
              fetch(`http://localhost:3001/days/${id}`, {
                method : 'DELETE',
              })
              .then(res => {
                  alert('삭제됨...')
              })
            }
            
          } else {
            fetch(`http://localhost:3001/days/${id}`, {
              method : 'DELETE',
            })
            .then(res => {
                alert('삭제됨...')
            })
          }
      }
    }
    

  return (

    <ul className='list_day'>
          {sortedDays.map( day => 
              <li key={day.id}>
                <div className='day' style={{display : 'flex', alignItems : 'center', flexDirection : 'row', justifyContent : 'space-around'}}>
                  <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                  <div onClick={()=>{
                    del(day.id, day.day);
                  }}>x</div>
                </div>
              </li>
          )}
    </ul>

  )
}
