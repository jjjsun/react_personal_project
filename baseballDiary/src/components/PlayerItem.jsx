import './PlayerItem.css'
import { getDoosanPlayerImage } from '../util/get-doosan-player-img';


const PlayerItem = ({playerId, playerName, isSelected, onClick}) => {
    return (
        <div className={`playerItem ${isSelected ? "selected" : ""}`} onClick={onClick}>
            <img className='player_img' src={getDoosanPlayerImage(playerId)} alt={playerName}/>
            <div className='player_name'>{playerName}</div>
        </div>
    )
}


export default PlayerItem;