import React, { useRef } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");

    const navigate = useNavigate();

    const inputDay = useRef(null);

    async function saveData() {
        let check = true;
        days.forEach( data => {
            if(data.day === Number(inputDay.current.value)){
                alert('이미있는 날짜임...');
                check =  false;
            }
        })

        if(check){
            await axios.post(`http://localhost:3001/days/`, 
                JSON.stringify({
                    day : Number(inputDay.current.value)
                }),
              )
              .then(res => {
                if(res.statusText === 'Created') {
                alert('생성 완료~~');
                navigate('/');
                }
              })
        }

    }

    // function dayOnchange(e) {
    //     days.map( data => {
    //         if(data.day === Number(e.target.value)){
    //             alert('이미있는 날짜임...')
    //         }
    //     })
    // }
  return (
    <div>
        <h3>현재 일수 : {days.length}일</h3>
        {/* <span>Day 입력 </span><input ref={inputDay} type='text'/> */}
        <div className='input_area'>
            <label>Day 입력</label>
            <input ref={inputDay} type='text'/>
        </div>
        <button onClick={saveData}>Day 추가</button>
    </div>
  )
}
