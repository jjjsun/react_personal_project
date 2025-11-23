import './DiaryItem.css'
import Button from './Button';
import { getDoosanImage } from '../util/get-doosan-img';
import teamImgMap from '../util/get-team-img';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import { useContext } from 'react';

const DiaryItem = ({id, createdDate, opponentTeam, ourScore, opponentScore, stadium, homeAway, food, content, mvp, result}) => {

    const nav = useNavigate();
    let ourScoreColor = "rgb(246,246,246)";
    let opponentScoreColor = "rgb(246,246,246)";
    let resultColor = "rgb(246,246,246)";

    const {onDelete} = useContext(DiaryDispatchContext);

    if(ourScore > opponentScore){
        //승리
        ourScoreColor = "rgb(1,0,57)";
        opponentScoreColor = "rgb(216,216,216)";
        // resultColor = "rgb(7,124,170)";
        resultColor = "rgb(20,205,242)";
    }
    else if (ourScore < opponentScore) {
        //패배
        ourScoreColor = "rgb(216,216,216)";
        opponentScoreColor = "rgb(1,0,57)";
        resultColor = "rgb(233,21,57)";
    }
    else {
        //무승부
        ourScoreColor = "rgb(216,216,216)";
        opponentScoreColor = "rgb(216,216,216)";
        resultColor = "rgb(0,0,0)";
    }
    

    const onClickDelete = () => {
        if(window.confirm("정말로 삭제하시겠습니까?")){
            onDelete(id);
            nav('/',{replace: true})
        }
    }

    return (
        <div className='DiaryItem'>
            <div onClick={()=>nav(`/diary/${id}`)} className='info_section'>
                <div className='date_section'>
                    <span>{new Date(createdDate).toLocaleDateString()}</span>
                    <span style={{color: resultColor}}>{result}</span>
                </div>
                <div className='content_section'>
                    <div className='ourTeam'>
                        <img src={getDoosanImage(2)} alt="두산 엠블럼"/>
                        <h4>두산베어스</h4>
                    </div>
                    <div className='score'>
                        <span style={{color: ourScoreColor}}>{ourScore}</span> :{" "}
                        <span style={{color: opponentScoreColor}}>{opponentScore}</span>
                    </div>
                    <div className='opponentTeam'>
                        <h4>{opponentTeam}</h4>
                        <img src={teamImgMap[opponentTeam]} alt={`${opponentTeam} 엠블럼`}/>
                    </div>
                </div>
                <div className='add_info_section'>
                    {stadium}
                </div>
            </div>
            <div className='button_section'>
                <Button text={"수정하기"} onClick={()=>nav(`/edit/${id}`)}/>
                <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete}/>
            </div> 
        </div>
    )
}

export default DiaryItem;