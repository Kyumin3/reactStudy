import React, { useRef, useState  } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function CreateWord() {

  const days = useFetch('http://localhost:3001/days');
  let sortedDays = days.slice().sort((a, b) => a.day - b.day);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);


  function onSubmit(e){
    e.preventDefault();
    saveData();
  }

  async function saveData() {
    // setIsDone(!isDone);

    if(!isLoading){
      setIsLoading(true);
      await axios.post(`http://localhost:3001/words/`, 
        JSON.stringify({
          day : dayRef.current.value,
          eng : engRef.current.value,
          kor : korRef.current.value,
          isDone : false
        })
      )
      .then(res => {
          if(res.statusText === 'Created') {
              alert('생성 완료~~');
              navigate(`/day/${dayRef.current.value}`);
              setIsLoading(false);
          }
      })
    }

}

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className='input_area'>
        <label>Eng</label>
        <input type='text' placeholder='computer' ref={engRef} />
      </div>
      <div className='input_area'>
        <label>Kor</label>
        <input type='text' placeholder='컴퓨터' ref={korRef} />
      </div>
      <div className='input_area'>
        <label>Day</label>
        <select ref={dayRef}>
          {sortedDays.map( day => (
              <option key={day.id} value={day.day}>{day.day}일</option>
          ))}
          
        </select>
      </div>
      <button style={
        {opacity : isLoading? 0.3 :1}
        
      }>{isLoading ? '로딩중입니당' : '저장'}</button>
    </form>
  )
}
