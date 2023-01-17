import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name: "이인제",
        comment : "안녕하세요, 소플입니다",

    },
    {
        name: "임규민",
        comment : "재밌어요~~~"
    },
    {
        name: "으아아",
        comment : "ㅎㅎ",
    },






];

function CommentList(props){

    return(
        <div>
            {comments.map((comments) =>{
            return(
                <Comment name={comments.name} comment ={comments.comment} />
            );
         })}
        </div>
    );


}

export default CommentList; 