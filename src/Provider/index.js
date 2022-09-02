import {  useState , useContext } from "react";
import {DisplayContext} from './displayProvider';
import { songsdata } from "../Data/music";



//cutom hook
export const useDisplay=()=>{
      return useContext(DisplayContext);
}

//global state  to manage the state and change the state;

const DisplayState = () => {

  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(0);
  const [limit  , setLimit]=useState(0);
  const [active , setActive] =useState(0);
  const [click ,setClick] =useState(false);
  const [activeElement , setActiveElement]=useState();
  const [activeIndex , setactiveIndex]=useState();
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [mindex , setmIndex] =useState(0)
  const [currentSong, setCurrentSong] = useState(songs[index]);
 

  //to change the songs nav
  const next=()=>{
    console.log("hey")
    if(mindex<songs.length-1){
      setmIndex(mindex+1);
      setCurrentSong(songs[mindex]);
      currentSong.progress =0;
      setisplaying(false);
      
    }
    else{
      setmIndex(0)
      setCurrentSong(songs[mindex]);
      currentSong.progress =0;
      setisplaying(false);
    }
   

  }

  const prev=()=>{
    console.log("hey")
    if(mindex==0){
      setmIndex(songs.length-1);
      setCurrentSong(songs[mindex])
      currentSong.progress =0;
      setisplaying(false);
      
    }
    else{
      setmIndex(mindex-1);
      setCurrentSong(songs[mindex])
      currentSong.progress =0;
      setisplaying(false);
  
    }
   
  }

  //to chagne the display ui
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

//to chang the active button based on zingtouc
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

 //select button state
 
 const requestClick=()=>{
    setClick(!click);
 }

  return {
songs, setSongs , isplaying , setisplaying , mindex , setmIndex , currentSong , setCurrentSong ,
activeElement,activeIndex, prev , next ,
  setActiveElement, setactiveIndex , goBack , index, goTomenu , Changedisplay , changeLimit , limit , active , changeActiveUp , changeActiveDown,
  };
};
export default DisplayState;