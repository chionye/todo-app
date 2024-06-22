import "./Loader.css";
import loadingAnimation from "../../assets/loadingAnimation.gif";

export const Loader = () => {
    return(
        <div>
            <img src={loadingAnimation} alt="Loading..." />
        </div>
    )
}