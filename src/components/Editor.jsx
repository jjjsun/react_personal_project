import './Editor.css'
import PlayerItem from './PlayerItem';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { playerList } from '../util/playerList';
import { getStringedDate } from '../util/get-stringed-date';
import { teamColors } from '../util/get-team-color';

const homeAwayColors ={
    home: "rgb(246,246,246)",
    away: "rgb(1,0,57)"
}




const Editor =  ({initData, onSubmit}) => {

    const [input, setInput] = useState({
        createdDate: new Date(),
        opponentTeam: "",
        ourScore: 0,
        opponentScore: 0,
        stadium: "서울잠실야구장",
        homeAway: "home",
        food: [],
        content: "",
        mvp: null,
    });

    const nav = useNavigate();

    useEffect(()=>{
        if(initData){
            setInput({
                ...initData, 
                createdDate : new Date(Number(initData.createdDate)),
                food: Array.isArray(initData.food) ? initData.food : []
                //initData.food에 null,undefined, 그냥 문자열들어가면 뒤에 .map부분에서 에러날수있음
                //그래서,initData.food가 배열인지 체크해서 보정하는거임.
            })
        }
    },[initData])

    const addFood = () => {
        setInput({
            ...input, food: [...input.food, ""],
        })
    }

    const removeFood = (index) => {
        setInput({
            ...input, food: input.food.filter((_,i)=>i !== index),
        })
    }
    
    const handleFoodChange = (index, value) => {
        const newFoods = [...input.food];
        newFoods[index] = value;
        setInput({
            ...input, food: newFoods,
        })
    }

    
    
    const onChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        if(name === "createdDate"){
            value = new Date(value);
        }
        if (name === "ourScore" || name === "opponentScore" || name === "mvp"){
            value = Number(value);
        }

        setInput({
            ...input,
            [name]: value,
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    return (
        <div className='Editor'>
            <section className='date_seciton'>
                <h4>오늘의 날짜</h4>
                <input 
                    name="createdDate"
                    onChange={onChangeInput}
                    value={getStringedDate(input.createdDate)} 
                    type="date"
                />
            </section>
            <section className='score_section'>
                <h4>오늘의 스코어</h4>
                <div className='score_wrapper'>
                    <a>두산베어스</a>
                    <input name="ourScore" type='number' min="0" className='score-input' value={input.ourScore} onChange={onChangeInput}/>
                    <span>:</span>
                    <input name="opponentScore" type='number' min="0" className='score-input' value={input.opponentScore} onChange={onChangeInput}/>
                    <select name="opponentTeam" value={input.opponentTeam} onChange={onChangeInput}
                        style={{backgroundColor: teamColors[input.opponentTeam] || "rgb(1,0,57)", color: "white"}}   
                    >    
                        <option value={"엘지트윈스"} style={{backgroundColor: teamColors["엘지트윈스"]}}>LG트윈스</option>
                        <option value={"롯데자이언츠"} style={{backgroundColor: teamColors["롯데자이언츠"]}}>롯데자이언츠</option>
                        <option value={"SSG랜더스"} style={{backgroundColor: teamColors["SSG랜더스"]}}>SSG랜더스</option>
                        <option value={"키움히어로즈"} style={{backgroundColor: teamColors["키움히어로즈"]}}>키움히어로즈</option>
                        <option value={"KT위즈"} style={{backgroundColor: teamColors["KT위즈"]}}>KT위즈</option>
                        <option value={"한화이글스"} style={{backgroundColor: teamColors["한화이글스"]}}>한화이글스</option>
                        <option value={"기아타이거즈"} style={{backgroundColor: teamColors["기아타이거즈"]}}>기아타이거즈</option>
                        <option value={"NC다이노스"}  style={{backgroundColor: teamColors["NC다이노스"]}}>NC다이노스</option>
                        
                        <option value={"삼성라이온즈"} style={{backgroundColor: teamColors["삼성라이온즈"]}}>삼성라이온즈</option>
                    </select>
                </div>
            </section>
            <section className='stadium_section'>
                <h4>오늘의 구장</h4>
                <select name='homeAway' value={input.homeAway} onChange={onChangeInput}>
                    <option value={"home"} style={{backgroundColor: "rgb(246,246,246)"}}>홈</option>
                    <option value={"away"} style={{backgroundColor: "rgb(1,0,57)", color: 'white'}}>원정</option>
                </select>
                <select name="stadium" value={input.stadium} onChange={onChangeInput}>
                    <option value={"서울잠실야구장"}>서울잠실야구장</option>
                    <option value={"사직야구장"}>사직야구장</option>
                    <option value={"SSG랜더스필드"}>SSG랜더스필드</option>
                    <option value={"고척스카이돔"}>고척스카이돔</option>
                    <option value={"KT위즈파크"}>KT위즈파크</option>
                    <option value={"대전한화생명볼파크"}>대전한화생명볼파크</option>
                    <option value={"광주KIA챔피언스필드"}>광주KIA챔피언스필드</option>
                    <option value={"창원NC파크"}>창원NC파크</option>
                    <option value={"대구라이온즈파크"}>대구라이온즈파크</option>
                </select>
            </section>
            <section className='food_section'>
                <h4>오늘의 음식</h4>
                <div className='food_list'>
                    {input.food.map((food, index) => (
                        <div className='food_item' key={index}>
                            <input 
                                name='food'
                                type="text" 
                                value={food} 
                                onChange={(e)=> handleFoodChange(index, e.target.value)} 
                                placeholder='음식을 입력하시오'
                            />
                            <button className='remove_btn' onClick={()=> removeFood(index)}>X</button>
                        </div>
                    ))}
                    <button className='add_btn' onClick={addFood}>음식 추가</button>
                </div>
            </section>
            <section className='content_section'>
                <h4>오늘의 직관일기</h4>
                <textarea name='content' value={input.content} onChange={onChangeInput} placeholder='오늘의 경기는 어땠나요?'/>
            </section>
            <section className='mvp_section'>
                <h4>오늘의 두산 MVP</h4>
                <div className='player_list_wrapper'>
                    {playerList.map((item)=>(
                        <PlayerItem 
                            key={item.playerId} 
                            {...item}
                            isSelected={input.mvp !== item.playerId && input.mvp !== null}
                            onClick={()=>{
                                const next = input.mvp === item.playerId ? null : item.playerId;
                                onChangeInput({target: {name: "mvp", value: next}})
                            }}
                        />
                    ))}
                </div>
                
            </section>
            <section className='button_section'>
                <Button text={"취소하기"} onClick={()=>nav(-1)}/>
                <Button onClick={onClickSubmitButton} text={"작성완료"} type={"POSITIVE"}/>
            </section>
        </div>
    )
}


export default Editor;