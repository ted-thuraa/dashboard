import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userprofile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked ] = useState(initialState)
    const [screenSize, setScreenSize ] = useState(undefined);


    //since initialstate is an object we spread it and then only change the clicked item value 
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true});
    }
    return (
        <StateContext.Provider value={{ isClicked, setIsClicked, activeMenu, setActiveMenu, screenSize, setScreenSize, handleClick }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);