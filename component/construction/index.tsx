import React,{FC} from "react";
import Lottie from "lottie-react";
import construction from "../../public/construction.json";

const ConstructionAnim:FC = () => <Lottie animationData={construction} loop={true} />;

export default ConstructionAnim;