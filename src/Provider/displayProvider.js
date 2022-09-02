import { createContext  } from "react";
import DisplayState from './index.js';



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

