import { useContext } from 'react';

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { UserContext } from './context/User';

// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

const RoutesApp = () => {

    const { dataUser, setDataUser } = useContext(UserContext);

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    )
    
};

export default RoutesApp;