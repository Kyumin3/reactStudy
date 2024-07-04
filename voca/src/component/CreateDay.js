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
        days.map( data => {
            if(data.day === Number(inputDay.current.value)){
                alert('이미있는 날짜임...');
                check =  false;
            }
        })

        if(check){
            fetch(`http://localhost:3001/days/`, {
                method : 'POST',
                headers : {
                    'content-Type' : 'application/json'
                },
                body: JSON.stringify({
                day : Number(inputDay.current.value)
                }),
            })
            .then(res => {
                if(res.ok) {
                    alert('생성 완료~~');
                    navigate('/');
                }
            })

        }

    }

  return (
    <div>
        <h3>현재 일수 : {days.length}일</h3>
        <div className='input_area'>
            <label>추가 원하는 Day 입력</label>
            <input ref={inputDay} type='text'/>
        </div>
        <button onClick={saveData}>Day 추가</button>
    </div>
  )
}
