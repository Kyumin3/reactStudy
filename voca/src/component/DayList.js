import React from 'react'
import dummy from '../db/data.json'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

export default function DayList() {


    
    
    let days = useFetch('http://localhost:3001/days');
    let sortedDays = days.slice().sort((a, b) => a.day - b.day);


    if(days.length ===0) {
      return <span>Loading...</span>
    }

    async function del(id,day) {

       let words = [];
      
      if(window.confirm('삭제하시겠습니까?')){
        

          await axios.get(`http://localhost:3001/words?day=${day}`).then((res)=>{
            words = res.data;
          });

          if(words.length > 0){

            let delChk = 0;

            await Promise.all(
              words.map(async (word) => {
                await axios.delete(`http://localhost:3001/words/${word.id}`)
                .then(async res => {
                    if(res.statusText === 'OK') {
                      delChk++;
                    }
                })
              })
            )
            if(delChk === words.length){
              await axios.delete(`http://localhost:3001/days/${id}`)
              .then(res => {
                  if(res.statusText === 'OK') {
                    alert('삭제됨...');
                  }
              })
            }

          } else {
            await axios.delete(`http://localhost:3001/days/${id}`)
            .then(res => {
                if(res.statusText === 'OK') {
                  alert('삭제됨...');
                }
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
