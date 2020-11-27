import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState({ id: "", name: "", profile_photo_url: ""});
    // const [alert, setAlert] = useState({
    //     isAlert: false,
    //     type: "info",
    //     message: "default alert"
    // });

    // const createAlert = (type, message) => {
    //     setAlert({ isAlert: true, type: type, message: message });
    // };
    // const resetAlert = () => {
    //     setAlert({ isAlert: false, type: "", message: "" });
    // };

    const fetchUser = response => {
        setUser({
            // id: response.data.id,
            // name: response.data.name,
            id: response.id,
            name: response.name,
            profile_photo_url : response.profile_photo_url,
            // location: response.location,
        });
    };

    // const [userLocation, setUserLocation] = useState("string");


    return (
        <AppContext.Provider
            value={{
                user,
                fetchUser,
                // userLocation,
                // setUserLocation,
                // alert,
                // createAlert,
                // resetAlert,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };