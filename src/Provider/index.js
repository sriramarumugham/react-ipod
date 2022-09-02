import {  useState , useContext } from "react";
import {DisplayContext} from './displayProvider';

export const useDisplay=()=>{
      return useContext(DisplayContext);
}
const DisplayState = () => {

  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(0);
  const [limit  , setLimit]=useState(0);
  const [active , setActive] =useState(0);
  const [click ,setClick] =useState(false);
  const [activeElement , setActiveElement]=useState();
  const [activeIndex , setactiveIndex]=useState();

  const Changedisplay = (value , historyindex) => {
    const newHistory=history;
    newHistory.push(historyindex);
    setHistory(newHistory);
    setIndex(value);
    setClick(!click);
  };

  const goBack = () => {
    console.log("going back")
    if(history.length>0 && history.length-1 >=0){
      setHistory( history.slice(0, history.length - 1));
        setIndex(history[history.length-1])
  }
   
  };
  const goTomenu=()=>{
    setIndex(0);
    setHistory([]);
  }
  const changeLimit=(value)=>{
     setLimit(value);
  }
  const changeActiveUp=()=>{
     if(active<limit-1 && active >=0){
      setActive(active+1)
     }
     else{setActive(0)}
  }
  const changeActiveDown=()=>{
    if(active>0){
      setActive(active-1)
     }
     else{setActive(limit-1)}

 }
 const requestClick=()=>{
    setClick(!click);
 }
  return {
    activeElement,activeIndex,
  setActiveElement, setactiveIndex , goBack , index, goTomenu , Changedisplay , changeLimit , limit , active , changeActiveUp , changeActiveDown,
  };
};
export default DisplayState;