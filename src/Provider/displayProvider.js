import { createContext  } from "react";
import DisplayState from './index.js';


//context api  

export const DisplayContext= createContext();

 const DisplayProvider =({children})=>{

    const value=DisplayState();
     return(
        <DisplayContext.Provider value={value}>
        {children}
      </DisplayContext.Provider>
     )
}
export default DisplayProvider;

