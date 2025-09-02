import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext,useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {

    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);

    usePageTitle("직관일기 수정");
    
    const curDiaryItem = useDiary(params.id);

    
    const onClickDelete = () => {
        if(window.confirm("정말로 삭제하시겠습니까?")){
            onDelete(params.id);
            nav('/',{replace: true})
        }
    }

    const onSubmit = (input) => {
        if(window.confirm("일기를 수정하시겠습니까?")){
            onUpdate(params.id, input.createdDate.getTime(), input.opponentTeam, input.ourScore, input.opponentScore, input.stadium, input.homeAway, input.food, input.content, input.mvp)
            nav('/', {replace:true})
        }

        
        
    }

    return (
        <div className="Edit">
            <Header 
                title={"직관일기수정"}
                leftChild={<Button text={"< 뒤로가기"} onClick={()=>nav(-1)}/>}
                rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete}/>}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
}


export default Edit;