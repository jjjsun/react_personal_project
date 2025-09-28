import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {

    const nav = useNavigate();

    const {onCreate} = useContext(DiaryDispatchContext);

    usePageTitle("새 직관 일기 작성");

    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(), input.opponentTeam, input.ourScore, input.opponentScore, input.stadium, input.homeAway, input.food, input.content, input.mvp)
        nav('/', {replace: true})
    }
 
    return (
        <div className="New">
            <Header
                leftChild={<Button text={"< 뒤로가기"} onClick={()=>nav(-1)}/>}  
                title={"새 직관 일기 작성"}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}


export default New;