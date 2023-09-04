
import { FaCircle,FaPen,FaTimes } from 'react-icons/fa';
function Icon({name}){
    if(name=="zero"){
        return <FaCircle/>
    }else if(name=="cross"){
        return <FaTimes/>
    }else{
        return <FaPen/>
    }
}
export  default Icon;