import Icon from "../icon/icon";
import "./card.css";
function Card({gameEnd,onPlay,player,index}){
    let icon=<Icon/>
    if(player=="0"){
        icon=<Icon name="zero"/>
    }else if(player=="X"){
       icon=<Icon name="cross"/>
    }
    return <>
    <div className="card" onClick={()=> !gameEnd && player=="" && onPlay(index)}>
        {icon}
    </div>
    </>
}
export default Card;