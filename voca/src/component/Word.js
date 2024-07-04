import React, { useState } from 'react'
import axios from 'axios';

export default function Word({ word : w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    async function toggleDone() {

        await axios.put(`http://localhost:3001/words/${word.id}`, 
            JSON.stringify({
            ...word, 
            isDone: !isDone,
        })  ).then(res => {
            if(res.statusText === 'OK') {
                setIsDone(!isDone)
            }
        })
    }

    async function del() {
        if(window.confirm('삭제하시겠습니까?')){
            await axios.delete(`http://localhost:3001/words/${word.id}`)
            .then(res => {
                if(res.statusText === 'OK') {
                    setWord({id : 0});
                }
            })
        }
    }

    if(word.id === 0 ){
        return null;
    }
  return(
    <tr className={isDone ? 'off' : ''}>
    <td>
        <input type='checkbox' checked={isDone}
        onChange={toggleDone}
        />
    </td>
    <td>{word.eng}</td>
    <td>{isShow && word.kor}</td>
    <td>
        <button onClick={toggleShow}>뜻{isShow ? ' 숨기기' : ' 보기'}</button>
        <button onClick={del} className='btn_del'>삭제</button>
    </td>
</tr>
  )
}

/** 
 * 
 * REST API
 * 
 * Create : POST
 * Read : GET
 * Update : PUT
 * Delete : DELETE
 * 
 * 
 **/
