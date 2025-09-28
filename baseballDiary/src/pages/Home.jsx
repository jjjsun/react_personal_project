import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { getDoosanImage } from "../util/get-doosan-img";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";



const getYearlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), 0, 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), 11, 31, 23, 59, 59).getTime();
    return data.filter((item)=>beginTime <= item.createdDate && item.createdDate <= endTime);
}


const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setpivotDate] = useState(new Date());
    const currentYear = new Date().getFullYear();

    usePageTitle("두산 직관일기장");

    const YearlyData = getYearlyData(pivotDate, data);

    const onIncreaseYear = () => {
        if( pivotDate.getFullYear() >= currentYear){
            window.alert(`${currentYear}년 이상으로는 이동할 수 없습니다.`)
            return;
        }
        setpivotDate(new Date(pivotDate.getFullYear() + 1, pivotDate.getMonth(), pivotDate.getDate()))
    }
    const onDecreaseYear = () => {
        if( pivotDate.getFullYear() <= 1982){
            window.alert('1982년 이하으로는 이동할 수 없습니다.')
            return;
        }
        setpivotDate(new Date(pivotDate.getFullYear() - 1, pivotDate.getMonth(), pivotDate.getDate()))
    }

    return (
        <div>
            <Header 
                leftChild={<Button text={"<"} onClick={onDecreaseYear}/>}
                rightChild={<Button text={">"} onClick={onIncreaseYear}/>}
                title={
                    <div className="title_wrapper">
                        <img src={getDoosanImage(2)} alt={"두산베어스 엠블럼"}/>
                        <span>{`${pivotDate.getFullYear()} 직관일기`}</span>
                        <img src={getDoosanImage(2)} alt={"두산베어스 엠블럼"}/>
                    </div>
                }
            />
            <DiaryList data={YearlyData}/>
        </div>
    )
}

export default Home;