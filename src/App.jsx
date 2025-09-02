import './App.css'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import { useReducer, useRef, createContext, useEffect, useState } from 'react'

const getResult = (ourScore, opponentScore) => {
  if (ourScore > opponentScore) return "승리";
  if (ourScore < opponentScore) return "패배";
  return "무승부";
}




function reducer(state, action){
  let nextState;
  switch(action.type){
    case 'INIT' :
      return action.data;
    case 'CREATE': 
      { nextState = [action.data, ...state]
        break; 
      };
    case 'UPDATE': 
      { nextState = state.map((item)=>String(item.id) === String(action.data.id) ? action.data : item)
        break;
      };
    case 'DELETE': 
    {
      nextState = state.filter((item)=> String(item.id) !== String(action.id))
      break;
    };
    default: return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoding] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(()=>{
    const storedData = localStorage.getItem("diary");
    if(!storedData){
      setIsLoding(isLoading);
      return;
    }
    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)){
      setIsLoding(false);
      return ;
    }

    let maxId = 0;
    parsedData.forEach((item)=>{
      if(Number(item.id)> maxId){
        maxId = Number(item.id);
      }
    })
    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    })
    setIsLoding(false);
  },[])



  const onCreate = (createdDate, opponentTeam, ourScore, opponentScore, stadium, homeAway, food, content, mvp) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef. current++,
        createdDate,
        opponentTeam,
        ourScore,
        opponentScore,
        stadium,
        homeAway,
        food,
        content,
        mvp,
        result: getResult(ourScore, opponentScore)
      }
    })
  }
  const onUpdate = (id, createdDate, opponentTeam, ourScore, opponentScore, stadium, homeAway, food, content, mvp) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        opponentTeam,
        ourScore,
        opponentScore,
        stadium,
        homeAway,
        food,
        content,
        mvp,
        result: getResult(ourScore, opponentScore)
      }
    })
  }
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  if(isLoading) {
    return <div>데이터 로딩중입니다...</div>
  }

  return (
    <>
      <DiaryStateContext.Provider value= {data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />}/>
            <Route path="/diary/:id" element={<Diary />}/>
            <Route path="/edit/:id" element={<Edit />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
      
    </>
    
  )
}
export default App
