import React , {createContext, useState} from 'react';



let Data = createContext();
const Context = ({children}) => {

  // Menu States
let [memu, setMenu] = useState(false);
let MenuVisiblity = () => {
  setMenu((prevState) => !prevState);
};
let menuClose = ()=>{
  setMenu(false)
}


  return (
    <Data.Provider value={{memu , setMenu , MenuVisiblity , menuClose}}>{children}</Data.Provider>
  )
}

export  {Context , Data}