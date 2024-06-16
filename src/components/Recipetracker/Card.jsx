import react from "react";
function Card(props){
    return <div className="parent">
        <div className="card">
            <h1>{props.khao}</h1>
            <h1>{props.do}</h1>
            <h1>{props.lo}</h1>
    </div>
    </div>
     
}
export default Card;