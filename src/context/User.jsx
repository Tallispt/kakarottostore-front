import { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [ dataUser, setDataUser ] = useState(null);

    return(
        <UserContext.Provider value={{ dataUser, setDataUser }}>
            { children }
        </UserContext.Provider>
    )
    
};

export { UserContext };
export default UserProvider;