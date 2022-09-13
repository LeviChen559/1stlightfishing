import React,{FC} from "react";
import { Player } from '@lottiefiles/react-lottie-player';
const ConstructionAnim:FC = () => {
return <>
<Player
src="/construction.json"
className="player"
loop
autoplay
style={{ height: '80%', width: '80%' }}
/>
</>

}


export default ConstructionAnim;