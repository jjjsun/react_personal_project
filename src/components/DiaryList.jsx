import './DiaryList.css'
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';


const DiaryList = ({data}) => {
    
    const total = data.length;
    const wins = data.filter((item)=> item.ourScore > item.opponentScore).length;
    const draw = data.filter((item)=> Number(item.ourScore) === Number(item.opponentScore)).length;
    const winRate = total > 0 ? Math.round((wins/(total-draw)) * 100) : 0;

    const nav = useNavigate();

    const [dateSortType, setDateSortType] = useState("latest");
    const onChangeDateSortType = (e) => {
        setDateSortType(e.target.value);
    }
    const getDateSortedData = () => {
        return data.toSorted((a,b)=>{
            if(dateSortType === 'oldest'){
                return Number(a.createdDate) - Number(b.createdDate);
            }
            else{
                return Number(b.createdDate) - Number(a.createdDate);
            }
        })
    }
    const dateSortedData = getDateSortedData();

    const [resultSortType, setResultSortType] = useState("all");
    const onChangeResultSortType = (e) => {
        setResultSortType(e.target.value);
    }
    const resultSortedData = useMemo(()=>{
        if(resultSortType === "all"){
            return dateSortedData;
        }
        if(resultSortType === "onlyWin"){
            return dateSortedData.filter((item)=>item.result === "승리")
        }
        if(resultSortType === "onlyLose"){
            return dateSortedData.filter((item)=>item.result === "패배")
        }

    }, [dateSortedData, resultSortType])
    
    /*= () => {
        if(resultSortType === "all"){
            return dateSortedData;
        }
        if(resultSortType === "onlyWin"){
            return dateSortedData.filter((item)=>item.result === "승리")
        }
        if(resultSortType === "onlyLose"){
            return dateSortedData.filter((item)=>item.result === "패배")
        }
    }
        */
    

    const gotoTickLink = () => {
        window.open("https://www.doosanbears.com/ticket/reserve");
    }

    

    return (
        <div className='DiaryList'>
            
            <div className='menu_bar'>
                <div className='diarylist_filter'>
                    <div className='diarylist_filter_date'>
                        <select onChange={onChangeDateSortType}>
                            <option value={"latest"}>최신순</option>
                            <option value={"oldest"}>오래된 순</option>
                        </select>
                    </div>
                    <div className='diarylist_filter_result'>
                        <select onChange={onChangeResultSortType}>
                            <option value={"all"}>모두</option>
                            <option value={"onlyWin"}>승리만</option>
                            <option value={"onlyLose"}>패배만</option>
                        </select>
                    </div>
                </div>
                <div className='diarylist_stats'>
                    <h2>직관 승률 : {winRate}%</h2>
                </div>
                <div className='diarylist_actions'>
                    <Button text={"예매하러가기"} onClick={gotoTickLink}/>
                    <Button text={"새 직관일기쓰기"} type={"POSITIVE"} onClick={()=>nav('/new')}/>
                </div>
            </div>
            <div>
                {resultSortedData.map((item)=><DiaryItem key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default DiaryList;