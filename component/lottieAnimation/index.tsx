import React, { FC } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { Box } from '@mui/material';
interface Props{
    src:string
}

const LottieAnimation: FC<Props> = ({ src }) => {
    return <Box sx={{margin:"10% 0"}}>
        <Player
            src={src}
            className="player"
            loop
            autoplay
            style={{ height: '80%', width: '80%' }}
        />
    </Box>

}


export default LottieAnimation;