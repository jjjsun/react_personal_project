import { getDoosanPlayerImage } from '../util/get-doosan-player-img';
import './Viewer.css'
import { playerList } from '../util/playerList';
import { getDoosanImage } from '../util/get-doosan-img';
import teamImgMap from '../util/get-team-img';
import { teamColors } from '../util/get-team-color';


const Viewer = ({createdDate, opponentTeam, ourScore, opponentScore, stadium, homeAway, food, content, mvp}) => {

    const playerItem = playerList.find((item)=> String(item.playerId) === String(mvp))

    let ourScoreColor = "rgb(246,246,246)";
    let opponentScoreColor = "rgb(246,246,246)";
    let result = "승리"
    if(ourScore > opponentScore){
        //승리
        ourScoreColor = "rgb(1,0,57)";
        opponentScoreColor = "rgb(216,216,216)";
        result = "승리"
    }
    else if (ourScore < opponentScore) {
        //패배
        ourScoreColor = "rgb(216,216,216)";
        opponentScoreColor = "rgb(1,0,57)";
        result = "패배"
        
    }
    else {
        //무승부
        ourScoreColor = "rgb(216,216,216)";
        opponentScoreColor = "rgb(216,216,216)";
        result = "무승부"
    }


    return (
        <div className='Viewer'>
            <section className='match_section'>
                <h4>오늘의 경기</h4>
                <div className='match_list_wrapper'>
                    <div className='team'>
                        <img src={getDoosanImage(2)} /> 두산베어스 : {opponentTeam} <img src={teamImgMap[opponentTeam]} />
                    </div>
                    <div className='result'>
                        <span>{result}</span>
                    </div>
                    <div className='score'>
                        <span style={{color: ourScoreColor}}>{ourScore}</span> : <span style={{color: opponentScoreColor}}>{opponentScore}</span>
                    </div>
                    <div className='stadium'>
                        <div>{stadium}</div>
                        <div>{homeAway}</div>
                    </div>
                </div>

            </section>
            <section className='mvp_section'>
                <h4>오늘의 MVP</h4>
                <div className='mvp_img_wrapper'>
                    <img src={getDoosanPlayerImage(mvp)}/>
                    <div className='playerName'>{playerItem.playerName}</div>
                </div>
            </section>
            <section className='content_section'>
                <h4>오늘의 직관일기</h4>
                <div className='content_wrapper'>
                    <p>{content}</p>
                </div>
            </section>
            <section className='food_section'>
                <h4>오늘의 음식</h4>
                <div className='food_list_wrapper'>
                    {Array.isArray(food) ? food.map((item,idx)=>(<span key={idx} className='food_item'>{item}</span>)): <span className='food_item'>{food}</span>}
                </div>
            </section>
        </div>
    )
}

export default Viewer;