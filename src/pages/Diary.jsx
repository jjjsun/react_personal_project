import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { DiaryStateContext } from "../App";
import { useContext } from "react";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";


const Diary = () => {
    const params = useParams();
    const nav = useNavigate();
    const data = useContext(DiaryStateContext);

    usePageTitle("오늘의 경기");

    const curDiaryItem = useDiary(params.id);
    
    if(!curDiaryItem){
        return <div>데이터 로딩중입니다.</div>
    }

    const {createdDate, opponentTeam, ourScore, opponentScore, stadium, homeAway, food, content, mvp} = curDiaryItem;
    const title=getStringedDate(new Date(createdDate));

    return (
        <div>
            <Header 
                title={`${title}`}
                leftChild={<Button text={"< 뒤로가기"} onClick={()=>nav(-1)}/>}
                rightChild={<Button text={"수정하기"} type={"NEGATIVE"} onClick={()=>nav(`/edit/${params.id}`)}/>}
            />
            <Viewer 
                createdDate={createdDate}
                opponentTeam={opponentTeam}
                ourScore={ourScore}
                opponentScore={opponentScore}
                stadium={stadium}
                homeAway={homeAway}
                food={food}
                content={content}
                mvp={mvp}    
            />
        </div>
    )
}

export default Diary;