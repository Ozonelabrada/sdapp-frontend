import React from "react";

export const UserContext = React.createContext({});

//create a function to handle user context
export const UserProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const contextValue = {
        user, setUser, isLoggedIn, setIsLoggedIn
    }
    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
