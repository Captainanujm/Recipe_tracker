import react, { useState } from "react";
import Card from "./Card.jsx";
import "./style.css";
import Menu from "./Menu.jsx";
import din from "./din.jsx";
import lunch from "./lunch.jsx";
function Nav(props){
    const [food,getFood]=useState(null);
    const [mousehandle,setMouseHandle]=useState(false);
    const [isLunchHovered, setIsLunchHovered] = useState(false);
    const [isDinnerHovered, setIsDinnerHovered] = useState(false);
   function handlemouseenter(){
    setMouseHandle(true);
   }
   function handlemouseleave(){
    setMouseHandle(false);
   }
   const handleMouseEnterLunch = () => setIsLunchHovered(true);
   const handleMouseLeaveLunch = () => setIsLunchHovered(false);
   const handleMouseEnterDinner = () => setIsDinnerHovered(true);
    const handleMouseLeaveDinner = () => setIsDinnerHovered(false);
    function getlunch(){
        getFood("lunch");
    }
    function getbreakfast(){
        getFood("breakfast");
    }
    function getDinner(){
        getFood("dinner");
    }
    return <div>
        <div className="navi">
            <h1 onClick={getbreakfast} onMouseOver={handlemouseenter} onMouseLeave={handlemouseleave}
            style={mousehandle==true?{color:"white"}:null}>{props.breakfast}</h1>
            <h1 onClick={getlunch} onMouseOver={handleMouseEnterLunch } onMouseLeave={handleMouseLeaveLunch}
            style={isLunchHovered==true?{color:"white"}:null}>{props.lunch}</h1>
            <h1 onClick={getDinner} onMouseOver={handleMouseEnterDinner } onMouseLeave={handleMouseLeaveDinner}
            style={isDinnerHovered==true?{color:"white"}:null}>{props.dinner}</h1>
        </div>
        <div className="wrapdo">
                {food === "breakfast" &&
                    Menu.filter((items)=>{
                        return items.key<4;
                    }).map((filtered)=>{
                        return <Card khao={filtered.food} do={filtered.price} lo={filtered.quantity} />
                    })
                }
                {food === "lunch" &&
                    lunch.map((items) => (
                        <Card khao={items.food} do={items.price} lo={items.quantity} />
                    ))}
                {food === "dinner" &&
                    din.map((items) => (
                        <Card khao={items.food} do={items.price} lo={items.quantity} />
                    ))}
            </div>
        </div>
}
export default Nav;