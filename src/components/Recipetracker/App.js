import react from "react";
import Nav from "./Navigation.jsx"
import Card from "./Card.jsx"
function App(){
  return( <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      <h1 className="mainHead">Recipe Tracker App</h1>
  <div className="MyApp">
    <div className="navbar">
    <Nav breakfast="BreakFast" lunch="Lunch" dinner="Dinner"/>
    </div>
  </div>
  </div>)
}
export default App;