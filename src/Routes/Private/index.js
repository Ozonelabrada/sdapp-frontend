import React from "react";
import { Navigate, useLocation } from "react-router-dom"
import { UserContext } from "../../context/userContext";

const Private = ({ component: Component }) => {
    const location = useLocation();
    const { user } = React.useContext(UserContext);
    console.log(user)

    // create React useMemo hook to check if user is authenticated
    const isAuthenticated = React.useMemo(() => {
        try {
            return user.token ? true : false
        } catch (error) { return false }
    }, [user])

    return isAuthenticated
        ? <Component />
        : <Navigate to="/login" state={{ from: location }} />

}

export default Private
