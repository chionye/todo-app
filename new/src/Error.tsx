import { useRouteError, useNavigate } from "react-router-dom";
import Error404 from "./assets/404.svg";
import Others from "./assets/Bomb.svg";
import { Button } from "./components";

interface RouteError {
    status: number,
}

function Error () {
    const error = useRouteError() as RouteError;
    const navigate = useNavigate();

    return(
        <div className="errorPage">
            {error.status === 404 ? 
            <>
                <h1>Oops...</h1>
                <img src={Error404} width={350} alt="Page not found" />
            </>
            :
            <>
                <h1>Something went wrong...</h1>
                <img src={Others} width={350} alt="Something went wrong" />
            </>
            }
            <Button handleClick={() => navigate(-1)} label="Go back" />
        </div>
    )
}

export default Error;
