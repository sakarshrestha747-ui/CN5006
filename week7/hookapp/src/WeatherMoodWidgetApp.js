import React, { useState ,useEffect} from "react";
import Love from './sunny.png'
import Sad from './rainy.png'
import Like from './cloudy.png'
function WeatherMoodWidgetApp(props){
console.log("pic is ",props.pic)
const [pic, setPic]=useState(Love)
const [count,setCount]=useState(0)
useEffect(()=>{
console.log ("function called",props.pic)
if (props.pic==="sunny")
 setPic(Love)
else if (props.pic==="rainy")
 setPic(Like)
else if (props.pic==="cloudy")
 setPic(Sad)
})
const ClickHandle=() =>
 {
 setCount(count+1)
 }
return (
<div className="App">
 <p>{props.pic} <span></span>
 <button onClick={ClickHandle}>{count }
 <img src={pic} alt=""/>
 </button>
 </p>
</div>
)
}
export default WeatherMoodWidgetApp;